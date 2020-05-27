// -------------------------
// problemy z dziedziczeniem
// -------------------------

// interfejs bazowy
interface Computer {
    CPU: Object[];
    PowerSupply: Object;
    HardDiskDrive: Object;
    MainMemory: Object;
    Keyboard?: Object;
    Monitor?: Object[];
    Mouse?: Object;
    Input(): any;
    Output(): any;
    Processing(): any;
    Storage(): any;
}

// rozszerzamy bazowy interface, jest ok
interface Server extends Computer {
}
 
// dodatkowy, prosty interfejs - nie każdy komputer ma Controller, więc nie możemy dodać do interfejsu bazowego
interface Controllable {
    Controller: any;
    Control(): any;
}

// j/w
interface HasCamera {
    Camera: any;
}
 
// złożenie interfejsów bazowych - b. fajnie pracuje na poziomie interfejsu. Ta sama sztuczka nie przejdzie na poziomie klas
interface Dron extends Computer, Controllable, HasCamera {
    Fly(): any;
    Record(): any;
}

interface RCcar extends Computer, Controllable{
}
 
interface Frigde extends Computer, HasCamera {
}

// klasa bazowa komputera
class ClassComputer implements Computer {
    CPU: Object[];
    PowerSupply: Object;
    HardDiskDrive: Object;
    MainMemory: Object;
    Keyboard?: Object;
    Monitor?: Object[];
    Mouse?: Object;
    Input() {
        throw new Error("Method not implemented.");
    }
    Output() {
        throw new Error("Method not implemented.");
    }
    Processing() {
        throw new Error("Method not implemented.");
    }
    Storage() {
        throw new Error("Method not implemented.");
    }
    
}
 
// klasa składająca konkretne interfejsy bazowe
class ComputerWithController extends ClassComputer implements Controllable {
    Controller: any;
    Control() {
        throw new Error("Method not implemented.");
    }
 
}
 // kolejna klasa składająca konkretne interfejsy bazowe
class ComputerWithCamera extends ClassComputer implements HasCamera {
    Camera: any;
}
 
// ...i kolejna. A teraz wyobraź sobie 30 bazowych interfejsów... not really funny.
class ComputerWithCameraAndController extends ClassComputer implements HasCamera, Controllable {
    Camera: any;
    Controller: any;
    Control() {
        throw new Error("Method not implemented.");
    }
    
}
 
// klasa docelowa dla której musieliśmy budować klasy bazowe
class ClassDron extends ComputerWithCameraAndController {
 setDestinatio(): void {}
 fly(): void {}
}
 
// druga klasa docelowa itd
class RcCarclass extends ComputerWithController {
 
}

// rozwiązanie powyższych problemów - Composition over inheritance