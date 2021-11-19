import * as React from "react";

import Linkify from "react-linkify";
import PropTypes from "prop-types";

const NewLineText = ({ text, ...props }) => {
  return (
    <div>
      {text.split(/(\n)/).map((s, i) => (
        <React.Fragment key={i}>
          {s.match(/\n/) ? (
            <br />
          ) : (
            <Linkify
              componentDecorator={(decoratedHref, decoratedText, key) => (
                <a
                  style={{ color: "#065fd4" }}
                  // target="_blank"
                  // rel="noopener"
                  href={decoratedHref}
                  key={key}
                >
                  {decoratedText}
                </a>
              )}
            >
              {" "}
              {s}
            </Linkify>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

NewLineText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NewLineText;
