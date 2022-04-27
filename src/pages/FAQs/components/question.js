import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6`}
`;
const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const PrimaryButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 text-sm inline-block mx-auto md:mx-0 rounded-full`}
`;
export default ({ card }) => {
  const [readMore, setReadMore] = useState(false);
  const linkName = readMore ? "Read Less << " : "Read More >> ";

  return (
    <Column>
      <Card>
        <span className="imageContainer">
          <img src={card.imageSrc} alt="" />
        </span>
        <span className="textContainer">
          <span className="title">{card.title}</span>
          <p className="description">
            <div>
              <PrimaryButton
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                <h2>{linkName}</h2>
              </PrimaryButton>
              {readMore && card.description}
            </div>
          </p>
        </span>
      </Card>
    </Column>
  );
};
