const Video = require('../Models/video');

exports.uploadVideo = async (req,res)=>{
    try {
        const {title, description, video, thumbnail, videoType} = req.body;

        const videoUpload = new Video({ user: req.user._id, title, description, video, thumbnail,videoType});

        await videoUpload.save();

        res.status(201).json({ success:"true", videoUpload});

    } catch (error) {
        res.status(500).json({ error: 'Server Error'});
    }
}

exports.getAllVideos = async (req,res)=>{
    try {
        const videos = await Video.find().populate('user', 'channelName profilePic userName createdAt');
        res.status(201).json({success: 'true', "videos": videos});
    } catch (error) {
        res.status(500).json({ error: 'Server Error'});
    }
}

exports.getVideoById = async(req,res)=>{
    try {
        let {id} = req.params;
        const video = await Video.findById(id).populate('user', 'channelName profilePic userName createdAt');

        res.status(201).json({success: "true", "video": video});
    } catch (error) {
        res.status(500).json({ error: 'Server Error'});
    }
}

//  Videosin User Profile

exports.getAllVideosByUserId = async(req,res)=>{
    try {
        let {userId} = req.params;
        const video = await Video.find({user:userId}).populate('user', 'channelName profilePic userName about createdAt');
        
        res.status(201).json({success:"true", "video":video});
    } catch (error) {
        res.status(500).json({ error: 'Server Error'});
    }
}