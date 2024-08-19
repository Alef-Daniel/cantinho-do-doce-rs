import {
    Dialog,
    DialogContent,
    DialogOverlay,
    DialogTitle,
  } from "@/components/ui/dialog";
  
  interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
  }
  
  export default function Modal({ isOpen, onClose, title, children }: IModalProps) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-25" />
        <DialogContent className="flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-white rounded-lg p-6"> {/* Aumentar a largura aqui */}
            <DialogTitle className="text-lg font-medium text-gray-900">
              {title}
            </DialogTitle>
            <div className="mt-2 overflow-y-auto max-h-[400px]">
              {children}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={onClose}
              >
                Fechar
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  