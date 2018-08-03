import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Bio = () => (
  <div className="pt-3">
    <h3 className="text-dark-grey pl-2 pr-2 d-none d-lg-block">
About
    </h3>
    <div className="bio__text mt-2 mt-md-3 mt-lg-5 pl-2 pr-2 ">
      <p className="text-dark-grey">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
        pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
        vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
        nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
        augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
        tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
        ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
        et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
      </p>
    </div>

    <h3 className="text-dark-grey mt-5 pl-2 pr-2 ">
Let’s keep in touch!
    </h3>

    <h4 className="text-dark-grey mt-5 mb-5 pl-2 pr-2 ">
      <FontAwesomeIcon icon={faGithub} className="" />
      <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
      <FontAwesomeIcon icon={faLinkedin} className="ml-2" />
    </h4>
  </div>
);

export default Bio;
