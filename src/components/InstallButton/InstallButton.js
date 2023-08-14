import React from "react";
import "./InstallButton.css";

function InstallButton({ prompt, display, displayCheck }) {
  const onClickHandler = () => {
    prompt.prompt();
    prompt.userChoice.then((choiceResults) => {
      if (choiceResults.outcome === "accepted") {
        display(false);
      } else {
        display(false);
      }
    });
  };

  const onExitHandler = () => {
    display(false);
  };

  return (
    <div>
      <div>
        <div>
          <h5>Get our free app. It won't take up space on your phone!</h5>
        </div>
        <button onClick={onClickHandler}>Install</button>
        <button onClick={onExitHandler}>Ignore</button>
      </div>
    </div>
  );
}

export default InstallButton;
