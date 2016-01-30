// app/authenticators/oauth2.js
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from 'emberr/config/environment';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: ENV.APP.oauth_url,
  clientId: 'da114c888d7a0573b3000a63361e69ab4f1ddc080feac8d7874484fa57037e04'
});
