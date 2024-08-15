const CardBody = ({ body }: { body: string }) => {
    return (
        <p className="text-sm text-paragraph leading-6">
            <span className="w-10 inline-block bg-black"></span>
            {body}
        </p>
    );
}

export default CardBody;