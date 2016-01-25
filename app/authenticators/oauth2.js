// app/authenticators/oauth2.js
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: 'http://localhost:3000/oauth/token',
  clientId: 'da114c888d7a0573b3000a63361e69ab4f1ddc080feac8d7874484fa57037e04'
});
