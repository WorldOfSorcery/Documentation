interface TitleProps {
    title: string;
  }


  const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <head>
            <title>{`${title} | Doc`}</title>
        </head>
    );
  };
  
  export default Title;