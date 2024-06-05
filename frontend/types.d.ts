type User = {
    userId: string;
    avatarUrl: string;
    bio: string;
    userName: string;
    email: string;
    displayName: string;
    currentRoomId: string;
    lastSeen: Date;
    color?: string;
};

type RoomParticipant = {
    indicatorOn: boolean | undefined;
    isMod: boolean;
    isSpeaker: boolean;
    isMuted: boolean;
    raiseHand: boolean;
    followers: number;
    follwing: number;
    followsMe: boolean;
};

type Room = {
    roomId: string;
    creatorId: string;
    roomDesc: string; 
    isPrivate: boolean;
    autoSpeaker: boolean;
    chatEnabled: boolean;
    handRaiseEnabled: boolean;
    createdAt: Date;
    participants: RoomParticipant[];
    categories: string[];
};

type RoomCard = Room & {
    creator: string;
};

type RoomStatus = {
    roomId: string;
    userId: string;
    isMod: boolean;
    isSpeaker: boolean;
    isMuted: boolean;
    raiseHand: boolean;
    createdAt: Date;
};

type ChatMessage = User & {
    reply?: ChatMessage;
    content: string;
    createdAt: Date;
    read: boolean;
};