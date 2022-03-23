#!/bin/zsh

COMPONENTS_DIR=./src/components

vared -p "Component to delete: " -c component_name;
echo "Deleting @/store/modules/$component_name.js...";
rm $COMPONENTS_DIR/$component_name.vue;
echo "Component deleted :)";
