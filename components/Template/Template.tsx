export interface ITemplate {}

export interface ITemplateFunctions extends ITemplate {}

const Template: React.FC<ITemplateFunctions> = () => {
  return <div>Template</div>;
};

export default Template;
