import 'firebase/firestore';
import {doc, getDoc} from 'firebase/firestore';
import {NextResponse} from "next/server";
import {db} from "@/app/config/firebaseConfig";



export async function GET(request: Request) {
    try {
        const ref = await doc(db, 'test', 'bNapj36Jkr9N8lPSRjNf');

        const documentSnapshot = await getDoc(ref);
        const data = documentSnapshot.data();

            return NextResponse.json({data})
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({error: 'Error fetching data'})

    }
}

