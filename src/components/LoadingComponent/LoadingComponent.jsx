import { TailSpin } from "react-loader-spinner"
import  "../../scss/components/_LoadingComponent.scss";
export default function LoadingComponent(){

    return (
        <>
        <section className="sectionSpinner">
            <div className="Spinner">
                <TailSpin
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </section>
        </>
    )

}