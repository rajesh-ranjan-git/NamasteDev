from bs4 import BeautifulSoup
import sys
import os


def extract_and_create_readme(html_file_path, target_class="text-lg dark:text-white"):
    if not os.path.exists(html_file_path):
        print(f"Error: File '{html_file_path}' not found.")
        sys.exit(1)

    with open(html_file_path, "r", encoding="utf-8") as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, "html.parser")

    extracted_data = []

    all_h3s = soup.find_all("h3")

    for h3 in all_h3s:
        main_heading_div = h3.find("div", class_=target_class)
        if not main_heading_div:
            continue

        main_heading_text = main_heading_div.get_text(strip=True)

        sibling_div = h3.find_next_sibling("div")
        if not sibling_div:
            extracted_data.append(
                {"main_heading": main_heading_text, "subheadings": []}
            )
            continue

        subheadings = []

        all_inner_divs = sibling_div.find_all("div", recursive=True)
        paragraphs = sibling_div.find_all("p", recursive=True)

        for inner_div in all_inner_divs:
            if inner_div.has_attr("class"):
                continue

            subheading_text = inner_div.get_text(strip=True)
            if not subheading_text:
                continue

            subheadings.append({"title": subheading_text})

        for index, para in enumerate(paragraphs):
            subheadings[index]["description"] = para.get_text(strip=True)

        extracted_data.append(
            {"main_heading": main_heading_text, "subheadings": subheadings}
        )

    readme_lines = []
    readme_lines.append("# README\n")
    readme_lines.append("---\n")

    for index, section in enumerate(extracted_data):
        readme_lines.append(f"## {section.get('main_heading')}\n")

        for sub in section["subheadings"]:
            readme_lines.append(f"### {sub.get('title')}\n")

            if sub.get("description"):
                readme_lines.append(f"- [x] {sub.get("description")}\n- [x] Completed")

            readme_lines.append("")

        readme_lines.append("---\n")

    readme_content = "\n".join(readme_lines)

    output_path = os.path.join(os.path.dirname(html_file_path), "README.md")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(readme_content)

    print(f"README.md created at: {output_path}")
    print(f"Extracted {len(extracted_data)} main sections.")
    for section in extracted_data:
        print(
            f"- {section['main_heading']} ({len(section['subheadings'])} sub-headings)"
        )


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python readmeHelper.py <html_file_path> <target_class>")
        print("Example: python readmeHelper.py index.html my-heading-class")
        sys.exit(1)

    html_file = sys.argv[1]

    extract_and_create_readme(html_file)
