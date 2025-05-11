import PropTypes from 'prop-types';

export function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};