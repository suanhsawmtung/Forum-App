const Card = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div className="relative flex flex-col min-h-60 p-6 bg-white rounded-md overflow-hidden shadow-md">
            {children}
        </div>
    );
}

export default Card;