
import { useRouter } from "next/navigation";


export default function Modaljs({ children,titulo,objetivo }: { children: React.ReactNode,titulo:string,objetivo:string }) {


  return (
    <>

    <div className="modal fade" id={objetivo} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{titulo}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>

      </div>
    </div>
  </div>
  </>
  );
}
