import { IconType } from 'react-icons';

interface ICardProps {
    Icon: IconType;
    Title: string;
    Subtitle: string;
    colorIcon: string;
    sizeIcon: number;
}

export default function Card({ Icon, Title, Subtitle, colorIcon, sizeIcon }: ICardProps) {
    return (
        <div className="flex flex-col items-center justify-around w-64 h-36 bg-white border rounded-xl border-transparent shadow-2xl">
            <Icon size={sizeIcon} color={colorIcon}/>
            <h2 className="text-1xl font-bold text-center">{Title}</h2>
            <span>{Subtitle}</span>
        </div>
    );
}
