'use strict';

module.exports = {
	db: 'mongodb://devdbuser:1234qwer@ds047722.mongolab.com:47722/dev-questdb?authSource=dev-questdb',
	//db: 'mongodb://localhost/dev-quest-careers-db',

	app: {
		title: 'quest.careers - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '1449382402036046',
		clientSecret: process.env.FACEBOOK_SECRET || '12a998aa53ca493cb19ad04a89536648',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || '3tEvfNDdiucWl1uQdGCgnkMiT',
		clientSecret: process.env.TWITTER_SECRET || 'VovIpCqmlUKS1qTpuCNtOwga6Nr6kJ1maRwQ44Qvyv73bwYtXQ',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '586319064850-9erjdj5c8qeeg0mo7b08li6h78ojktgh.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'I4AxbIc9hGqz6voCTgDerGx5',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || '77i9ojdbaevb53',
		clientSecret: process.env.LINKEDIN_SECRET || 'bJiFjNHTEqolKj44',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
