//Replaces the object env with the type of deployment selected running NPM BUILD TOOL
module.exports = function(env) {
    return require(`./config/webpack.${env}.js`);
}
