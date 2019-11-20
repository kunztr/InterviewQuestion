##Developing a Marionette Component

###Prerequisites
- [git](https://git-scm.com/downloads) installed and in your path
- [node](https://nodejs.org/en/download/) installed and in your path

###Setup
- `> git clone https://github.com/USUeGrad/InterviewQuestion.git`
This will clone the repository into the current directory
- `> npm install` to install the Express dependency

###Running the Server
- `> npm run server` to run on port 3000
- `> npm run server [PORT_NUMBER]` if port 3000 is already taken
- Open a browser to `localhost:3000` to view the website

###Starting Code
- `/` The root contains several files that are needed to run a basic web server.
You can edit these if you want, but there shouldn't be any need.

- `/stylesheets` contains some basic styling to get you started. Feel free to
improve the styling if you want.

- `/scripts/test_data` contains the data that will need to be shown. You can
look here to see how the data is structured.

- `/scripts/root_view.js` contains the root component that will contain your
components.

###The Task
Develop a Marionette component. The component will be a list of tags using
[Bulma](https://bulma.io/documentation/elements/tag/) styling. All of your code
should go inside `/scripts`. You'll need to flesh out `RootView::_createTags()`
to instantiate and return your component.
