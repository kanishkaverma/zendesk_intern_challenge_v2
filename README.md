# Zendesk Intern Challenge

## Getting Started

### API key

Make a new file in the root directory called .env.local

Set it up like shown below. To get the JWT Oauth token, one needs to enable OAuth in their account and set up a JWT token as shown by this link:
[Auth Token](https://developer.zendesk.com/documentation/ticketing/working-with-oauth/creating-and-using-oauth-tokens-with-the-api/)

```
NEXT_PUBLIC_BASE_URL=https://{domain_name}.zendesk.com/api/v2/
API_TOKEN={YOUR_API_TOKEN}
NODE_OPTIONS='--inspect'
NEXT_PUBLIC_STATUS_URL=http://status.zendesk.com/api/components/support?domain={domain_name}.zendesk.com
```

Assuming you have node installed,
do a

` npm install`

<!-- Then, run the development server using the terminal:

```
npx next dev
``` -->

To look at the website in action, I recommend doing

```
npx next build
npx next start
```

these two commands would tell next to build the website and therefore, one can notice the speed improvements.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Note on testing

Since, Next.js uses getStaticProps and getServerSideProps internally to fetch data on the server and then serve it to the application from the server. Unit tests are not very viable. Next recommends E2E tests wherever possible. Therefore, I have written mostly E2E tests for the components in the Pages folder. However, for any normal React components, I made sure to write Unit tests as well using Jest.

To run the tests, simply do `npm run tests`

## ISR [Incremental Static Regeneration]

This website uses Incremental Static Regeneration to fetch and serve data. pages are built statically using Next and served from a cache in the CDN ,which makes the website incredibly fast. However, in case there is a change in the data being sent by the API. The pages which are affected by the changed data are rebuilt and cached after 60 seconds.

## Screenshots 

![screenshot](https://github.com/kanishkaverma/zendesk_intern_challenge_v2/blob/main/screenshots/Screenshot%20(9).png)
![screenshot](https://github.com/kanishkaverma/zendesk_intern_challenge_v2/blob/main/screenshots/Screenshot%20(10).png)
![screenshot](https://github.com/kanishkaverma/zendesk_intern_challenge_v2/blob/main/screenshots/Screenshot%20(11).png)
![screenshot](https://github.com/kanishkaverma/zendesk_intern_challenge_v2/blob/main/screenshots/Screenshot%20(12).png)
![screenshot](https://github.com/kanishkaverma/zendesk_intern_challenge_v2/blob/main/screenshots/Screenshot%20(13).png)
![screenshot](https://github.com/kanishkaverma/zendesk_intern_challenge_v2/blob/main/screenshots/Screenshot%20(14).png)
![screenshot](https://github.com/kanishkaverma/zendesk_intern_challenge_v2/blob/main/screenshots/Screenshot%20(15).png)
