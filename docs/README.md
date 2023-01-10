# XLA docs

This directory contains all the documentation for XLA, written in
Markdown. It also includes `website` files that are used by the MkDocs build,
which is defined by `mkdocs.yml` in the repo root.

## Stage the website locally

It's easy to preview the rendered docs locally:

1. Start a Python virtual environment (optional but recommended):

    ```bash
    python3 -m venv ~/.venvs/mkdocs

    source ~/.venvs/mkdocs/bin/activate
    ```

2. Navigate to the `xla` root directory, and then
   install Material for MkDocs and other packages:

    ```bash
    pip install -r docs/website/requirements.txt
    ```

3. Now start the local server:

    ```bash
    mkdocs serve
    ```

4. Open a browser to http://localhost:8000/.

That's it. The web pages automatically reload while you edit the markdown.
