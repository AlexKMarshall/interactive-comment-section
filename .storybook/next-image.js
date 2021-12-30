/*
  The Next Image component creates dynamic urls in order to serve different sized images
  To do that it has various loader functions that tell it how to construct the url for different
  cloud service providers or locally. Storybook doesn't have access to any of this as it happens
  at build time. So this component tries to get as close as possible to the built in component.

  It uses the NextImage component directly so all the markup and styling etc is exactly the same
  as it would be in production. But it overrides the src prop with a loader defined here.

  It will be helpful in storybook to just be able to provide some web images like from unsplash
  so I've created an identityLoader that just returns the src url unchanged

  For the default loader we would do something like remove the optimization, so images are just served 
  as one-size (the other sizes are generated in the next build so might not exist). That would be fine for 
  any static images that we have.
  
  For a cloud provider the different sizes do exist, so we can use them. Next doesn't expose the implementation 
  of the loader functions, so we would have to copy and paste the implementation here to use them

  It would be nice to make this more flexible perhaps, so it's easier to provide different images
  will investigate if this is possible
*/

import * as NextImage from 'next/image'

const OriginalNextImage = NextImage.default

const identityLoader = ({ src }) => src

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})
