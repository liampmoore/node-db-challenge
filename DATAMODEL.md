# Data Model Notes

## Tables
**Attribute is required unless otherwise specified**

### projects
- id, project_name, project_completed(default false), project_description(optional) 

### tasks
- id, task_description, project_id, task_completed(default false), task_notes(optional)

### resources
- id, resource_name, resource_description(optional)

### project_resources
- project_id, resource_id