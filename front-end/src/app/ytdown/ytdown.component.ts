import { Component, OnInit } from '@angular/core';
import {YoutubeVideoDetails} from "./YoutubeVideoDetails";
@Component({
  selector: 'app-ytdown',
  templateUrl: './ytdown.component.html',
  styleUrls: ['./ytdown.component.css']
})


export class YtdownComponent implements OnInit {
  downloadUrl: string = '';
  selectedValue: string = '';

  videoDetails: YoutubeVideoDetails = new YoutubeVideoDetails();

  constructor() {
    this.videoDetails.thumbnail = "https://i.ytimg.com/vi/VAAh4OKyQVc/sddefault.jpg";
    this.videoDetails.url = "https://youtu.be/VAAh4OKyQVc";
    this.videoDetails.title = "YouTubers will never tell you this.";
    this.videoDetails.author = "Jake Tran";
    this.videoDetails.description = "😈 Watch exclusive 40+ minute documentaries that too controversial to ever be released to the public: https://jake.yt/join \n\n📹 Take a peak at all the private documentaries here: https://jake.yt/hidden-vids\n\n🎥 Business is complicated. Subscribe to curiosity: http://bit.ly/jt-sub\n✨ Follow us on TikTok: https://jake.yt/tiktok\n✉ Be the first to watch new videos with email notifications: http://bit.ly/jt-inbox\n📸 Follow me on IG: @jaketran.io // http://bit.ly/jt-ig\n\nSupport this channel monetarily:\n💻 𝗟𝗮𝗽𝘁𝗼𝗽 𝗟𝗶𝗳𝗲𝘀𝘁𝘆𝗹𝗲 𝗔𝗰𝗮𝗱𝗲𝗺𝘆: Learn exactly how I landed my $40/hr work from home job ($83k/yr) at 19 years old: https://jake.yt/LLAd\n📜 The exact resume I used to get my $40/hr remote web dev job + a lot of bonuses: https://jake.yt/DRBd\n\n✉️ Email me: jake@jaketran.io\n\n📰 Sources & visuals: https://bit.ly/3yB9slc \n\n-----------------------\n\n-----------------------\nKing I Divine - Reflections https://chll.to/240e161f\nPhilanthrope, Leavv - What Was Before https://chll.to/f09a373c\n\nAll materials in these videos are used for educational purposes and fall within the guidelines of fair use. No copyright infringement intended. If you are or represent the copyright owner of materials used in this video and have a problem with the use of said material, please send me an email, jake@jaketran.io, and we can sort it out.\n\nCopyright © 2021 Transcend Visuals, LLC. All rights reserved.\n\nDISCLAIMER:\n\nThis video does not provide investment or economic advice and is not professional advice (legal, accounting, tax).  The owner of this content is not an investment advisor.  Discussion of any securities, trading, or markets is incidental and solely for entertainment purposes.  Nothing herein shall constitute a recommendation, investment advice, or an opinion on suitability.  The information in this video is provided as of the date of its initial release.  The owner of this video expressly disclaims all representations or warranties of accuracy.  The owner of this video claims all intellectual property rights, including copyrights, of and related to, this video.\n\nAFFILIATE DISCLOSURE: Some of the links in this video's description are affiliate links, meaning, at no additional cost to you, the owner may earn a commission if you click through, make a purchase, and/or opt-in.";
    this.videoDetails.streams = []
    this.videoDetails.streams.push(
      {
        "_monostate": {
          "on_progress": null,
          "on_complete": null,
          "title": "YouTubers will never tell you this.",
          "duration": 1457
        },
        "url": "https://rr7---sn-ax8xaj5ggpxg-q5jl.googlevideo.com/videoplayback?expire=1653073281&ei=IZGHYrCdBdSCvcAPnp2I2A8&ip=103.4.146.91&id=o-AKfZ4FMCVRGFeJ8Agr3zCW-Vcnkzb9esEo0p4Cd2ZCfc&itag=17&source=youtube&requiressl=yes&mh=y8&mm=31%2C29&mn=sn-ax8xaj5ggpxg-q5jl%2Csn-npoeenlk&ms=au%2Crdu&mv=m&mvi=7&pl=24&initcwndbps=391250&vprv=1&mime=video%2F3gpp&gir=yes&clen=13931230&dur=1457.052&lmt=1652486163402937&mt=1653051183&fvip=5&fexp=24001373%2C24007246&c=ANDROID&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAIwXf0fPTZRyZLrmKn9hbw_mbnrZaJpL_uoGKO6lZzyqAiAPKmHY84Nallo7umD1lOj-115-ET4HqbgjQEhMHOCWFw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhALaN-BwMuaEut07i-EhE3Dd3eEHBZjmjkWV7rVN2bkfSAiEA2E1LTukCLxhe-LLkgi7P8rbpNOq873NqxSOsrzyeWig%3D",
        "itag": 17,
        "mime_type": "video/3gpp",
        "codecs": [
          "mp4v.20.3",
          "mp4a.40.2"
        ],
        "type": "video",
        "subtype": "3gpp",
        "video_codec": "mp4v.20.3",
        "audio_codec": "mp4a.40.2",
        "is_otf": false,
        "bitrate": 76495,
        "_filesize": 13931230,
        "is_dash": false,
        "abr": "24kbps",
        "fps": 12,
        "resolution": "144p",
        "is_3d": false,
        "is_hdr": false,
        "is_live": false
      },
      {
        "_monostate": {
          "on_progress": null,
          "on_complete": null,
          "title": "YouTubers will never tell you this.",
          "duration": 1457
        },
        "url": "https://rr7---sn-ax8xaj5ggpxg-q5jl.googlevideo.com/videoplayback?expire=1653073281&ei=IZGHYrCdBdSCvcAPnp2I2A8&ip=103.4.146.91&id=o-AKfZ4FMCVRGFeJ8Agr3zCW-Vcnkzb9esEo0p4Cd2ZCfc&itag=18&source=youtube&requiressl=yes&mh=y8&mm=31%2C29&mn=sn-ax8xaj5ggpxg-q5jl%2Csn-npoeenlk&ms=au%2Crdu&mv=m&mvi=7&pl=24&initcwndbps=391250&vprv=1&mime=video%2Fmp4&gir=yes&clen=75290221&ratebypass=yes&dur=1457.005&lmt=1652486166162167&mt=1653051183&fvip=5&fexp=24001373%2C24007246&c=ANDROID&txp=5538434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgU3WZAHvU8XqLm8O5UHLjyjmK_FVjWfMaMi9MWE3V3o8CIQDlYGeGOt5zfm5AGh8bccTAXUTnz_BbV-GNvAN04xhSBw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhALaN-BwMuaEut07i-EhE3Dd3eEHBZjmjkWV7rVN2bkfSAiEA2E1LTukCLxhe-LLkgi7P8rbpNOq873NqxSOsrzyeWig%3D",
        "itag": 18,
        "mime_type": "video/mp4",
        "codecs": [
          "avc1.42001E",
          "mp4a.40.2"
        ],
        "type": "video",
        "subtype": "mp4",
        "video_codec": "avc1.42001E",
        "audio_codec": "mp4a.40.2",
        "is_otf": false,
        "bitrate": 413411,
        "_filesize": 75290221,
        "is_dash": false,
        "abr": "96kbps",
        "fps": 24,
        "resolution": "360p",
        "is_3d": false,
        "is_hdr": false,
        "is_live": false
      },
      {
        "_monostate": {
          "on_progress": null,
          "on_complete": null,
          "title": "YouTubers will never tell you this.",
          "duration": 1457
        },
        "url": "https://rr7---sn-ax8xaj5ggpxg-q5jl.googlevideo.com/videoplayback?expire=1653073281&ei=IZGHYrCdBdSCvcAPnp2I2A8&ip=103.4.146.91&id=o-AKfZ4FMCVRGFeJ8Agr3zCW-Vcnkzb9esEo0p4Cd2ZCfc&itag=22&source=youtube&requiressl=yes&mh=y8&mm=31%2C29&mn=sn-ax8xaj5ggpxg-q5jl%2Csn-npoeenlk&ms=au%2Crdu&mv=m&mvi=7&pl=24&initcwndbps=391250&vprv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=1457.005&lmt=1652486472598902&mt=1653051183&fvip=5&fexp=24001373%2C24007246&c=ANDROID&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAOwmnzIYY25JTzVlQ-BidhauZo2LbvHRM9D3a6LSg6hQAiAEFbGIZIR1tkNxtUXovYLeT1gLewZynIwixVBcpaM3zQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhALaN-BwMuaEut07i-EhE3Dd3eEHBZjmjkWV7rVN2bkfSAiEA2E1LTukCLxhe-LLkgi7P8rbpNOq873NqxSOsrzyeWig%3D",
        "itag": 22,
        "mime_type": "video/mp4",
        "codecs": [
          "avc1.64001F",
          "mp4a.40.2"
        ],
        "type": "video",
        "subtype": "mp4",
        "video_codec": "avc1.64001F",
        "audio_codec": "mp4a.40.2",
        "is_otf": false,
        "bitrate": 529567,
        "_filesize": 0,
        "is_dash": false,
        "abr": "192kbps",
        "fps": 24,
        "resolution": "720p",
        "is_3d": false,
        "is_hdr": false,
        "is_live": false
      },
      {
        "_monostate": {
          "on_progress": null,
          "on_complete": null,
          "title": "YouTubers will never tell you this.",
          "duration": 1457
        },
        "url": "https://rr7---sn-ax8xaj5ggpxg-q5jl.googlevideo.com/videoplayback?expire=1653073281&ei=IZGHYrCdBdSCvcAPnp2I2A8&ip=103.4.146.91&id=o-AKfZ4FMCVRGFeJ8Agr3zCW-Vcnkzb9esEo0p4Cd2ZCfc&itag=139&source=youtube&requiressl=yes&mh=y8&mm=31%2C29&mn=sn-ax8xaj5ggpxg-q5jl%2Csn-npoeenlk&ms=au%2Crdu&mv=m&mvi=7&pl=24&initcwndbps=391250&vprv=1&mime=audio%2Fmp4&gir=yes&clen=8886108&dur=1457.098&lmt=1652485285243060&mt=1653051183&fvip=5&keepalive=yes&fexp=24001373%2C24007246&c=ANDROID&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANEkBuFapV6kT_WIr1IOvdJUM-QTn3BITzH8ZxQCNfn3AiEAiJSsV85EwG-zZRY6zcooA7EoYBy4nYLF8QdmvN9oszA%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhALaN-BwMuaEut07i-EhE3Dd3eEHBZjmjkWV7rVN2bkfSAiEA2E1LTukCLxhe-LLkgi7P8rbpNOq873NqxSOsrzyeWig%3D",
        "itag": 139,
        "mime_type": "audio/mp4",
        "codecs": [
          "mp4a.40.5"
        ],
        "type": "audio",
        "subtype": "mp4",
        "video_codec": null,
        "audio_codec": "mp4a.40.5",
        "is_otf": false,
        "bitrate": 51126,
        "_filesize": 8886108,
        "is_dash": true,
        "abr": "48kbps",
        "resolution": null,
        "is_3d": false,
        "is_hdr": false,
        "is_live": false
      },
      {
        "_monostate": {
          "on_progress": null,
          "on_complete": null,
          "title": "YouTubers will never tell you this.",
          "duration": 1457
        },
        "url": "https://rr7---sn-ax8xaj5ggpxg-q5jl.googlevideo.com/videoplayback?expire=1653073281&ei=IZGHYrCdBdSCvcAPnp2I2A8&ip=103.4.146.91&id=o-AKfZ4FMCVRGFeJ8Agr3zCW-Vcnkzb9esEo0p4Cd2ZCfc&itag=140&source=youtube&requiressl=yes&mh=y8&mm=31%2C29&mn=sn-ax8xaj5ggpxg-q5jl%2Csn-npoeenlk&ms=au%2Crdu&mv=m&mvi=7&pl=24&initcwndbps=391250&vprv=1&mime=audio%2Fmp4&gir=yes&clen=23581228&dur=1457.005&lmt=1652485285144316&mt=1653051183&fvip=5&keepalive=yes&fexp=24001373%2C24007246&c=ANDROID&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAOALGyZy8tAEVdZnauZ6NNTAdJ5vGDYpYFUKNqFv6jXnAiB2ToIYBVGN0rmgipGqP07xc4GLRF_n_S1GxC99XBqghA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhALaN-BwMuaEut07i-EhE3Dd3eEHBZjmjkWV7rVN2bkfSAiEA2E1LTukCLxhe-LLkgi7P8rbpNOq873NqxSOsrzyeWig%3D",
        "itag": 140,
        "mime_type": "audio/mp4",
        "codecs": [
          "mp4a.40.2"
        ],
        "type": "audio",
        "subtype": "mp4",
        "video_codec": null,
        "audio_codec": "mp4a.40.2",
        "is_otf": false,
        "bitrate": 131599,
        "_filesize": 23581228,
        "is_dash": true,
        "abr": "128kbps",
        "resolution": null,
        "is_3d": false,
        "is_hdr": false,
        "is_live": false
      },
      {
        "_monostate": {
          "on_progress": null,
          "on_complete": null,
          "title": "YouTubers will never tell you this.",
          "duration": 1457
        },
        "url": "https://rr7---sn-ax8xaj5ggpxg-q5jl.googlevideo.com/videoplayback?expire=1653073281&ei=IZGHYrCdBdSCvcAPnp2I2A8&ip=103.4.146.91&id=o-AKfZ4FMCVRGFeJ8Agr3zCW-Vcnkzb9esEo0p4Cd2ZCfc&itag=249&source=youtube&requiressl=yes&mh=y8&mm=31%2C29&mn=sn-ax8xaj5ggpxg-q5jl%2Csn-npoeenlk&ms=au%2Crdu&mv=m&mvi=7&pl=24&initcwndbps=391250&vprv=1&mime=audio%2Fwebm&gir=yes&clen=10434944&dur=1456.981&lmt=1652485319465602&mt=1653051183&fvip=5&keepalive=yes&fexp=24001373%2C24007246&c=ANDROID&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAKkXZ3UYYJZ3J_yoOnlcxqzBbviLgmYpi0lQ5cVWihd0AiEAgIVvwlp8fjzqb0FArMc8R35iXU8kntZanW5iWrR-gqU%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhALaN-BwMuaEut07i-EhE3Dd3eEHBZjmjkWV7rVN2bkfSAiEA2E1LTukCLxhe-LLkgi7P8rbpNOq873NqxSOsrzyeWig%3D",
        "itag": 249,
        "mime_type": "audio/webm",
        "codecs": [
          "opus"
        ],
        "type": "audio",
        "subtype": "webm",
        "video_codec": null,
        "audio_codec": "opus",
        "is_otf": false,
        "bitrate": 68263,
        "_filesize": 10434944,
        "is_dash": true,
        "abr": "50kbps",
        "resolution": null,
        "is_3d": false,
        "is_hdr": false,
        "is_live": false
      },
      {
        "_monostate": {
          "on_progress": null,
          "on_complete": null,
          "title": "YouTubers will never tell you this.",
          "duration": 1457
        },
        "url": "https://rr7---sn-ax8xaj5ggpxg-q5jl.googlevideo.com/videoplayback?expire=1653073281&ei=IZGHYrCdBdSCvcAPnp2I2A8&ip=103.4.146.91&id=o-AKfZ4FMCVRGFeJ8Agr3zCW-Vcnkzb9esEo0p4Cd2ZCfc&itag=250&source=youtube&requiressl=yes&mh=y8&mm=31%2C29&mn=sn-ax8xaj5ggpxg-q5jl%2Csn-npoeenlk&ms=au%2Crdu&mv=m&mvi=7&pl=24&initcwndbps=391250&vprv=1&mime=audio%2Fwebm&gir=yes&clen=13883714&dur=1456.981&lmt=1652485319475737&mt=1653051183&fvip=5&keepalive=yes&fexp=24001373%2C24007246&c=ANDROID&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhANCPTW7TKMO3wBO8eQqXGOBHYjj-0ph59Wsa_cpxUHD_AiBVqnUxPjFmWSuGRWEMM1t51EAadJXAxOiNNB208ZHhHg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhALaN-BwMuaEut07i-EhE3Dd3eEHBZjmjkWV7rVN2bkfSAiEA2E1LTukCLxhe-LLkgi7P8rbpNOq873NqxSOsrzyeWig%3D",
        "itag": 250,
        "mime_type": "audio/webm",
        "codecs": [
          "opus"
        ],
        "type": "audio",
        "subtype": "webm",
        "video_codec": null,
        "audio_codec": "opus",
        "is_otf": false,
        "bitrate": 89801,
        "_filesize": 13883714,
        "is_dash": true,
        "abr": "70kbps",
        "resolution": null,
        "is_3d": false,
        "is_hdr": false,
        "is_live": false
      },
      {
        "_monostate": {
          "on_progress": null,
          "on_complete": null,
          "title": "YouTubers will never tell you this.",
          "duration": 1457
        },
        "url": "https://rr7---sn-ax8xaj5ggpxg-q5jl.googlevideo.com/videoplayback?expire=1653073281&ei=IZGHYrCdBdSCvcAPnp2I2A8&ip=103.4.146.91&id=o-AKfZ4FMCVRGFeJ8Agr3zCW-Vcnkzb9esEo0p4Cd2ZCfc&itag=251&source=youtube&requiressl=yes&mh=y8&mm=31%2C29&mn=sn-ax8xaj5ggpxg-q5jl%2Csn-npoeenlk&ms=au%2Crdu&mv=m&mvi=7&pl=24&initcwndbps=391250&vprv=1&mime=audio%2Fwebm&gir=yes&clen=26689120&dur=1456.981&lmt=1652485319362246&mt=1653051183&fvip=5&keepalive=yes&fexp=24001373%2C24007246&c=ANDROID&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhALoLQrgywVU0_QjGE5-azqqdaKHK1xSSDEA7GJrkbLG5AiEAkWhvqgltPFvawK3YS8aqkfLAEHxSqfFUIjTFu0ALOG8%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhALaN-BwMuaEut07i-EhE3Dd3eEHBZjmjkWV7rVN2bkfSAiEA2E1LTukCLxhe-LLkgi7P8rbpNOq873NqxSOsrzyeWig%3D",
        "itag": 251,
        "mime_type": "audio/webm",
        "codecs": [
          "opus"
        ],
        "type": "audio",
        "subtype": "webm",
        "video_codec": null,
        "audio_codec": "opus",
        "is_otf": false,
        "bitrate": 175913,
        "_filesize": 26689120,
        "is_dash": true,
        "abr": "160kbps",
        "resolution": null,
        "is_3d": false,
        "is_hdr": false,
        "is_live": false
      })
  }

  ngOnInit(): void {
  }

}
