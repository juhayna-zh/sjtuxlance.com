# X-LANCE Lab Demo Showcase

A simple, configurable demo showcase website for X-LANCE Lab projects.

## Configuration

All content is managed through `docs/config.yaml`. Simply add your projects following this structure:

```yaml
categories:
  - name: Your Category Name 🎯
    projects:
      - name: Project Name
        link: https://your-project-url.com
        description: Brief description of your project
```

Once the configuration is modified and pushed to the repository, the website (https://sjtuxlance.com/) will automatically sync the new content within 5 minutes. If the content is not synced as expected, please contact me in WeChat.

## Local Development

### Option 1: Python HTTP Server (Recommended)

```bash
cd docs
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

### Option 2: Node.js Server

```bash
cd docs
node server.js
```

Then open `http://localhost:8080` in your browser.

