#!/bin/zsh

vared -p "Enter component name: " -c component_name;
cp ./templates/component_template.vue ./src/components/$component_name.vue;
echo "Successfully created the component $component_name.vue";