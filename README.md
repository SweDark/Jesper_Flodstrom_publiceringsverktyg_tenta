What you need: a <a href="https://cloudinary.com/">cloudinary</a> account, a <a href="https://formspree.io/">formspree.io<a/> account, a code editing program (<a href="https://code.visualstudio.com/">Visual Studio Code<a/> would be prefered), <a href="https://www.gatsbyjs.com/">gatsby</a> and <a href="https://nodejs.org/en/">Node.js</a>.

To install the project, you need to start with cloning the repository by 
```shell
git clone https://github.com/SweDark/portfolio-school
```
When the project has been cloned, you should open 2 terminals, 1 for the frontend map, and one for the backend map. 
After you've used "cd portfolio-frontend", you need to do install the packages with

```shell
npm install
```

Now you should open up the backend map by using "cd portfolio-backend" with the other terminal.
Go to portfolio-backend/extensions/upload/config/settings.json and add your own cloudinary key. If you haven't gotten a cloudinary account yet, then make one.
You should then check the package.json file and remove ""strapi-provider-upload-cloudinary": "^3.0.0",", since you'll have to download it after you've done an npm install.
There is a possibility that you'll recieve errors in strapi if you install them together.

```shell  
npm i strapi-provider-upload-cloudinary@3.0.0
```

As soon as you've finished installing everything, the strapi-admin menu should appear, if it doesn't, then type
```shell
npm run develop
```
in the backend terminal.
Strapi should start, and you can add your jobs, projects, blogs and even a page for your cv.
When you've filled everything in, you can press ctrl c on the backend terminal. Press y when it asks you to turn off the connection. You should then type npm run develop in the backend again, to make sure strapi has been updated.

Now, you can finally go to the frontend terminal while the backend is running in the other terminal.
You should now use
```shell
gatsby develop
```
After it has started, you can check the portfolio out on your browser by entering localhost:8000.
Do remember to change the hero.js information and image, while also changing the constants to be linked to your facebook, twitter and sites you're on.
And make sure to change the action form link in your contacts!

## Setup Notes

1. All components ready to go (including imports)
2. Use main.css - less imports
3. Limit amount of components - better overview
4. React Icons

[react icons] :https://react-icons.github.io/react-icons/

```javascript
import { FaHome } from "react-icons/fa"
const Component = () => {
  return <FaHome className="icon"></FaHome>
}
```

5. Use constants to avoid repetition.
6. In order to follow along with the video use my backend (url below)

   [strapi backend]:https://github.com/john-smilga/strapi-gatsby-porfolio-2020-api

7. Make sure such content-types exist in your Strapi application. Or replace/delete them in gatsby-config.js

```javascript
{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
```
