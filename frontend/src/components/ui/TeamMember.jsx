import PropTypes from 'prop-types';
import { UserCircle } from 'lucide-react';

export function TeamMember({ name, role, image }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="mb-4">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />
        ) : (
          <UserCircle className="w-24 h-24 text-gray-400 mx-auto" />
        )}
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        {name}
      </h3>
      <p className="text-gray-600">
        {role}
      </p>
    </div>
  );
}

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string
};