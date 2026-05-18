import json

def reorder_notebook(notebook_path):
    with open(notebook_path, "r", encoding="utf-8") as f:
        nb = json.load(f)

    cells = nb["cells"]
    
    header_cells = []
    current_section = "setup"
    sections = {"setup": [], "a": [], "b": [], "c": [], "d": []}
    
    for c in cells:
        if c["cell_type"] == "markdown":
            source_str = "".join(c["source"])
            if "### a." in source_str:
                current_section = "a"
            elif "### b." in source_str:
                current_section = "b"
            elif "### c." in source_str:
                current_section = "c"
            elif "### d." in source_str:
                current_section = "d"
        
        sections[current_section].append(c)

    # Reorder: Setup -> a -> d -> b -> c
    new_cells = sections["setup"] + sections["a"] + sections["d"] + sections["b"] + sections["c"]
    
    nb["cells"] = new_cells
    
    with open(notebook_path, "w", encoding="utf-8") as f:
        json.dump(nb, f, indent=1)

reorder_notebook("d:/Projects/WAD/airquality/AirQualitVisualizations.ipynb")
reorder_notebook("d:/Projects/WAD/heart/HeartDisease.ipynb")
print("Notebooks reordered.")
