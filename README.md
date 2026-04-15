# X-LANCE Lab Demo Showcase

A simple, configurable demo showcase website for X-LANCE Lab projects.

## Quick Start

1. Open `index.html` in your browser
2. Edit `config.yaml` to add or modify projects

## Configuration

All content is managed through `config.yaml`. Simply add your projects following this structure:

```yaml
categories:
  - name: Your Category Name 🎯
    projects:
      - name: Project Name
        link: https://your-project-url.com
        description: Brief description of your project
```

### Features

- HTML tags supported in `name` and `description` fields (e.g., `<b>bold</b>`, `<i>italic</i>`)
- Emoji supported in category names
- Responsive design for desktop and mobile
- Clean academic style

## Example

```yaml
categories:
  - name: Interactive Demo 🎮
    projects:
      - name: <b>My Project</b>
        link: https://example.com/demo
        description: This is an <i>amazing</i> project demo.
```
