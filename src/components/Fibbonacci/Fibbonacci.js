export default function Fibbonacci() {
    function* fibonacci() {
        let a = 0;
        let b = 1;
        while (true) {
            yield a;
            a = b;
            b = a + b;
        }
    }

    let fib = fibonacci();
    setInterval(() => {
        let value = fib.next().value;
        console.log(value);
    }, 3000);

    return(
        <>
            <div>
                1
            </div>
        </>
    );
}