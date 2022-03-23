#!/bin/zsh

vared -p "Enter module name: " -c module_name;
cp ./templates/store_module_template.js ./src/store/modules/$module_name.js;
echo "Successfully created the store module $module_name.js";