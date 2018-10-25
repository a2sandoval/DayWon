// IGNORE FOR NOW!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// integration tests will test all the unit tests working together
// try to tend toward integration rather than unit if you are looking for a time saver
import React from "react";
import { mount } from "enzyme";
// because we are working with a fake browser environment in our tests, we cannot make axios requests because we don't have the ability to make ajax requests inside our jsdom. Moxios will allow us to make the requests within a command line environment using jsdom. moxios is a workaround for using axios because it fakes the request needed to get data. It's sole purpose is faking out requests in test enviornments
import moxios from "moxios";
// by rendering root and app we are essentially rendering the entire application
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  // this install is what will setup moxios and tell it to intercept any request axios trys to get
  moxios.install();
  // it should then automatically respond to the axios call with this fake data. By putting this url in, we are saying that if it goes to this exact url intercept it
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    // we then customize how we want it to respond, fooling axios to think it was a successful request and giving it whatever data we want to send axios
    status: 200,
    // here is our fabricated data
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  });
});

afterEach(() => {
  // we uninstall it after to ensure we don't reuse it somewhere else in our tests
  moxios.uninstall();
});

// the done callback is one used to tell jest to wait to finish test, usually used with ajax/moxios calls. This callback tells jest to not assume this test is complete until after we call the done callback within the function
it("can fetch a list of comments and display them", done => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // we are finding the button with the className fetch-comments then simulating a click event
  wrapped.find(".fetch-comments").simulate("click");

  // this handles the delay between request and response for the axios to moxios call
  // this is a lot like setTimeout but more precise to the timeline because it's built for moxios. .wait will hold on unitl seeing the request
  moxios.wait(() => {
    // here we tell the wrapper to reupdate with the latest data now that we've paused long enough to recieve
    wrapped.update();

    expect(wrapped.find("li").length).toEqual(2);
    // now that we call done, test can complete
    done();
    wrapped.unmount();
  });
});
