const discordTTS = require("discord-tts");
const {
    Client,
    Intents
} = require("discord.js");
const {
    AudioPlayer,
    createAudioResource,
    StreamType,
    entersState,
    VoiceConnectionStatus,
    joinVoiceChannel
} = require("@discordjs/voice");
let voiceConnection;
let audioPlayer=new AudioPlayer();

module.exports = {
    name: "say",
    description: "Fala o conteúdo da mensagem",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const ttsMsg = `${message.member.user.username} disse ${args.join(" ")}`;
        const stream = discordTTS.getVoiceStream(ttsMsg, {lang: 'pt'});
        const audioResource = createAudioResource(stream, {
            inputType: StreamType.Arbitrary,
            inlineVolume: true
        });
        if (!voiceConnection || voiceConnection?.status === VoiceConnectionStatus.Disconnected) {
            voiceConnection = joinVoiceChannel({
                channelId: message.member.voice.channelId,
                guildId: message.guildId,
                adapterCreator: message.guild.voiceAdapterCreator,
            });
            voiceConnection = await entersState(voiceConnection, VoiceConnectionStatus.Connecting, 5_000);
        }

        if (voiceConnection.status === VoiceConnectionStatus.Connected) {
            voiceConnection.subscribe(audioPlayer);
            audioPlayer.play(audioResource);
        }
    }
}