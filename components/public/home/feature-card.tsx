import { FC } from "react";

interface FeatureCardProps {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ name, description, icon: Icon }) => {
  return (
    <div key={name} className="relative pl-16">
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        {name}
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600">{description}</dd>
    </div>
  );
};
export default FeatureCard;
