import "./index.css";

export function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-black text-green-400 font-mono p-4">
      <div className="border-2 border-dashed border-green-400 p-6 mb-6">
        <pre className="text-center text-sm mb-4">
          {`
  ███████  ██████  █████ ████  ██████    ███████  ██████ 
 ███░░███ ███░░███░░███ ░███  ░░░░░███  ███░░███ ███░░███
░███ ░███░███ ░███ ░███ ░███   ███████ ░███ ░███░███ ░███
░███ ░███░███ ░███ ░███ ░███  ███░░███ ░███ ░███░███ ░███
░░███████░░██████  ░░███████ ░░████████░░███████░░██████ 
 ░░░░░███ ░░░░░░    ░░░░░███  ░░░░░░░░  ░░░░░███ ░░░░░░  
 ███ ░███           ███ ░███            ███ ░███         
░░██████           ░░██████            ░░██████          
 ░░░░░░             ░░░░░░              ░░░░░░           `}
        </pre>
      </div>
    </div>
  );
}
