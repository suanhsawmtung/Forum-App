import Card from "./card/Card";

const Modal = ({
    children,
    onClose
  }: Readonly<{
    children: React.ReactNode;
    onClose: () => void
  }>) => {
    return (
        <div 
            onClick={onClose}
            className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-muted/60 overflow-hidden z-10"
        >
            <div 
                onClick={e => e.stopPropagation()} 
                className="lg:w-[28rem] z-20"
            >
                <Card>
                    {children}
                </Card>
            </div>
        </div>
    );
}

export default Modal;