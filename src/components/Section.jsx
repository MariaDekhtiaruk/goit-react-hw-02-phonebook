const Section = ({ title, childrenClassName, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      <div className={childrenClassName}>{children}</div>
    </section>
  );
};
export default Section;
