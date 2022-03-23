#!/bin/zsh

MODULES_DIR=./src/store/modules

vared -p "Module to delete: " -c module_name;
echo "Deleting @/store/modules/$module_name.js...";
rm $MODULES_DIR/$module_name.js;
echo "Store module deleted :)";