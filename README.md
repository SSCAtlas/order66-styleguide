# styleguide

# npm install ava-styleguide
bootstrap will be added along with override file

# create a new scss file named "override.scss"

# add an import to styleguide 
@import './node_modules/ava-styleguide/styleguide.scss';

# add the scss script to package.json file in main project
"scss": "sass override.scss compiled-bootstrap/override-bootstrap.css"

# npm run scss
a new folder named compiled-bootstrap with a file named override-bootstrap.css will populate at root of project
# add imports to main.js order is important
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../compiled-bootstrap/override-bootstrap.css'

# any updates to package
npm update ava-styleguide
npm run scss
