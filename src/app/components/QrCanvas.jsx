import QRCodeStyling from "qr-code-styling"
import { useEffect, useRef } from "react"

function QrCanvas(qrData) {
    const qrRef = useRef(null)

    const qrCode = new QRCodeStyling({
        width: qrData.qrData.width,
        height: qrData.qrData.height,
        backgroundOptions: "transparent",
        data: qrData.qrData.data,
        image: qrData.qrData.image,
        dotsOptions: {
            color: "#757780",
            type: "classy-rounded",
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: 20,
        },
    })

    console.log("qrData", qrData)

    useEffect(() => {
        if (qrRef.current) {
            qrRef.current.innerHTML = ""
            qrCode.append(qrRef.current)
        }
    }, [qrRef])

    return (
        <div className="w-[250px] h-[250px] mr-16 overflow-hidden relative">
            <div
                ref={qrRef}
                className="absolute inset-0"
                style={{
                    transform: `scale(${250 / qrData.qrData.width})`,
                    transformOrigin: "top left",
                }}
            ></div>
        </div>
    )
}

export default QrCanvas
