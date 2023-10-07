export function getCubicBezierPercentageFunc(a: any, b: any, c: any, d: any) {
  function e(a: any, b: any) {
    return 1 - 3 * b + 3 * a
  }
  function f(a: any, b: any) {
    return 3 * b - 6 * a
  }
  function g(a: any) {
    return 3 * a
  }
  function h(a: any, b: any, c: any) {
    return ((e(b, c) * a + f(b, c)) * a + g(b)) * a
  }
  function i(a: any, b: any, c: any) {
    return 3 * e(b, c) * a * a + 2 * f(b, c) * a + g(b)
  }
  function j(b: any) {
    var d = b
    for (var e = 0; e < 4; ++e) {
      var f = i(d, a, c)
      if (f === 0) return d
      var g = h(d, a, c) - b
      d -= g / f
    }
    return d
  }
  return function (e: any) {
    return a === b && c === d ? e : h(j(e), b, d)
  }
}

export function getRingGifUrl(color: string, size: string, theme: string) {
  switch (size) {
    case '12':
      switch (theme) {
        case 'dark':
          switch (color) {
            case 'blue':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/3mD7kKai_7W.gif',
                width: 12,
                height: 12,
                loggingID: '1876411',
              }
            case 'disabled':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/dzn6it4Fw3p.gif',
                width: 12,
                height: 12,
                loggingID: '1876443',
              }
            case 'dark':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/MStXnCtsaSe.gif',
                width: 12,
                height: 12,
                loggingID: '1876427',
              }
            case 'light':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/MStXnCtsaSe.gif',
                width: 12,
                height: 12,
                loggingID: '1876427',
              }
            default:
              return {
                sprited: 0,
                uri: '/assets/fb/gif/MStXnCtsaSe.gif',
                width: 12,
                height: 12,
                loggingID: '1876427',
              }
          }
        case 'light':
          switch (color) {
            case 'blue':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/NiR8M1k4AVU.gif',
                width: 12,
                height: 12,
                loggingID: '1876419',
              }
            case 'disabled':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/Bys0xcVibDa.gif',
                width: 12,
                height: 12,
                loggingID: '1876451',
              }
            case 'dark':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/TtXj9IXnkoK.gif',
                width: 12,
                height: 12,
                loggingID: '1876435',
              }
            case 'light':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/MStXnCtsaSe.gif',
                width: 12,
                height: 12,
                loggingID: '1876427',
              }
            default:
              return {
                sprited: 0,
                uri: '/assets/fb/gif/TtXj9IXnkoK.gif',
                width: 12,
                height: 12,
                loggingID: '1876435',
              }
          }
        default:
          return {
            sprited: 0,
            uri: '/assets/fb/gif/TtXj9IXnkoK.gif',
            width: 12,
            height: 12,
            loggingID: '1876435',
          }
      }
    case '16':
      switch (theme) {
        case 'dark':
          switch (color) {
            case 'blue':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/mHADa0fT0mI.gif',
                width: 16,
                height: 16,
                loggingID: '1876412',
              }
            case 'disabled':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/wqjQpFb4tea.gif',
                width: 16,
                height: 16,
                loggingID: '1876444',
              }
            case 'dark':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/dw2egiKdoVV.gif',
                width: 16,
                height: 16,
                loggingID: '1876428',
              }
            case 'light':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/dw2egiKdoVV.gif',
                width: 16,
                height: 16,
                loggingID: '1876428',
              }
            default:
              return {
                sprited: 0,
                uri: '/assets/fb/gif/dw2egiKdoVV.gif',
                width: 16,
                height: 16,
                loggingID: '1876428',
              }
          }
        case 'light':
          switch (color) {
            case 'blue':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/FNERtXIk9xp.gif',
                width: 16,
                height: 16,
                loggingID: '1876420',
              }
            case 'disabled':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/Wk0dcHGH6EG.gif',
                width: 16,
                height: 16,
                loggingID: '1876452',
              }
            case 'dark':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/HNs8yq0QiXE.gif',
                width: 16,
                height: 16,
                loggingID: '1876436',
              }
            case 'light':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/dw2egiKdoVV.gif',
                width: 16,
                height: 16,
                loggingID: '1876428',
              }
            default:
              return {
                sprited: 0,
                uri: '/assets/fb/gif/HNs8yq0QiXE.gif',
                width: 16,
                height: 16,
                loggingID: '1876436',
              }
          }
        default:
          return {
            sprited: 0,
            uri: '/assets/fb/gif/HNs8yq0QiXE.gif',
            width: 16,
            height: 16,
            loggingID: '1876436',
          }
      }
    case '20':
      switch (theme) {
        case 'dark':
          switch (color) {
            case 'blue':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/ZY0eC865SgX.gif',
                width: 20,
                height: 20,
                loggingID: '1876413',
              }
            case 'disabled':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/yy3mR2PXKrn.gif',
                width: 20,
                height: 20,
                loggingID: '1876445',
              }
            case 'dark':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/1DbfjOftY0d.gif',
                width: 20,
                height: 20,
                loggingID: '1876429',
              }
            case 'light':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/1DbfjOftY0d.gif',
                width: 20,
                height: 20,
                loggingID: '1876429',
              }
            default:
              return {
                sprited: 0,
                uri: '/assets/fb/gif/1DbfjOftY0d.gif',
                width: 20,
                height: 20,
                loggingID: '1876429',
              }
          }
        case 'light':
          switch (color) {
            case 'blue':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/l2FWxc8ihQj.gif',
                width: 20,
                height: 20,
                loggingID: '1876421',
              }
            case 'disabled':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/aOTs7vt2hEc.gif',
                width: 20,
                height: 20,
                loggingID: '1876453',
              }
            case 'dark':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/ay_drQe6StD.gif',
                width: 20,
                height: 20,
                loggingID: '1876437',
              }
            case 'light':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/1DbfjOftY0d.gif',
                width: 20,
                height: 20,
                loggingID: '1876429',
              }
            default:
              return {
                sprited: 0,
                uri: '/assets/fb/gif/ay_drQe6StD.gif',
                width: 20,
                height: 20,
                loggingID: '1876437',
              }
          }
        default:
          return {
            sprited: 0,
            uri: '/assets/fb/gif/ay_drQe6StD.gif',
            width: 20,
            height: 20,
            loggingID: '1876437',
          }
      }
    case '24':
      switch (theme) {
        case 'dark':
          switch (color) {
            case 'blue':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/M3mvaC7u8oH.gif',
                width: 24,
                height: 24,
                loggingID: '1876414',
              }
            case 'disabled':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/gTdm7zPKz-c.gif',
                width: 24,
                height: 24,
                loggingID: '1876446',
              }
            case 'dark':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/2uPGz8a6lb6.gif',
                width: 24,
                height: 24,
                loggingID: '1876430',
              }
            case 'light':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/2uPGz8a6lb6.gif',
                width: 24,
                height: 24,
                loggingID: '1876430',
              }
            default:
              return {
                sprited: 0,
                uri: '/assets/fb/gif/2uPGz8a6lb6.gif',
                width: 24,
                height: 24,
                loggingID: '1876430',
              }
          }
        case 'light':
          switch (color) {
            case 'blue':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/Io_N1z4MXYh.gif',
                width: 24,
                height: 24,
                loggingID: '1876422',
              }
            case 'disabled':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/wVjfNbGZ3CH.gif',
                width: 24,
                height: 24,
                loggingID: '1876454',
              }
            case 'dark':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/iACDMhAROS_.gif',
                width: 24,
                height: 24,
                loggingID: '1876438',
              }
            case 'light':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/2uPGz8a6lb6.gif',
                width: 24,
                height: 24,
                loggingID: '1876430',
              }
            default:
              return {
                sprited: 0,
                uri: '/assets/fb/gif/iACDMhAROS_.gif',
                width: 24,
                height: 24,
                loggingID: '1876438',
              }
          }
        default:
          return {
            sprited: 0,
            uri: '/assets/fb/gif/iACDMhAROS_.gif',
            width: 24,
            height: 24,
            loggingID: '1876438',
          }
      }
    case '32':
      switch (theme) {
        case 'dark':
          switch (color) {
            case 'blue':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/hVe2HmwMRpE.gif',
                width: 32,
                height: 32,
                loggingID: '1876415',
              }
            case 'disabled':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/kdaft251gQ_.gif',
                width: 32,
                height: 32,
                loggingID: '1876447',
              }
            case 'dark':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/60r9oPEvxiL.gif',
                width: 32,
                height: 32,
                loggingID: '1876431',
              }
            case 'light':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/60r9oPEvxiL.gif',
                width: 32,
                height: 32,
                loggingID: '1876431',
              }
            default:
              return {
                sprited: 0,
                uri: '/assets/fb/gif/60r9oPEvxiL.gif',
                width: 32,
                height: 32,
                loggingID: '1876431',
              }
          }
        case 'light':
          switch (color) {
            case 'blue':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/-1hifBvDgEQ.gif',
                width: 32,
                height: 32,
                loggingID: '1876423',
              }
            case 'disabled':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/oT6wM_vuQNQ.gif',
                width: 32,
                height: 32,
                loggingID: '1876455',
              }
            case 'dark':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/WEhNL1y2zoZ.gif',
                width: 32,
                height: 32,
                loggingID: '1876439',
              }
            case 'light':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/60r9oPEvxiL.gif',
                width: 32,
                height: 32,
                loggingID: '1876431',
              }
            default:
              return {
                sprited: 0,
                uri: '/assets/fb/gif/WEhNL1y2zoZ.gif',
                width: 32,
                height: 32,
                loggingID: '1876439',
              }
          }
        default:
          return {
            sprited: 0,
            uri: '/assets/fb/gif/WEhNL1y2zoZ.gif',
            width: 32,
            height: 32,
            loggingID: '1876439',
          }
      }
    case '48':
      switch (theme) {
        case 'dark':
          switch (color) {
            case 'blue':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/yFaaylccZ5L.gif',
                width: 48,
                height: 48,
                loggingID: '1876416',
              }
            case 'disabled':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/6-FTd4KBtOk.gif',
                width: 48,
                height: 48,
                loggingID: '1876448',
              }
            case 'dark':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/NlAFhiEx3a1.gif',
                width: 48,
                height: 48,
                loggingID: '1876432',
              }
            case 'light':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/NlAFhiEx3a1.gif',
                width: 48,
                height: 48,
                loggingID: '1876432',
              }
            default:
              return {
                sprited: 0,
                uri: '/assets/fb/gif/NlAFhiEx3a1.gif',
                width: 48,
                height: 48,
                loggingID: '1876432',
              }
          }
        case 'light':
          switch (color) {
            case 'blue':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/RcIiVWWukEr.gif',
                width: 48,
                height: 48,
                loggingID: '1876424',
              }
            case 'disabled':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/ac61i44rSWK.gif',
                width: 48,
                height: 48,
                loggingID: '1876456',
              }
            case 'dark':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/mAeZkO4yhqj.gif',
                width: 48,
                height: 48,
                loggingID: '1876440',
              }
            case 'light':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/NlAFhiEx3a1.gif',
                width: 48,
                height: 48,
                loggingID: '1876432',
              }
            default:
              return {
                sprited: 0,
                uri: '/assets/fb/gif/mAeZkO4yhqj.gif',
                width: 48,
                height: 48,
                loggingID: '1876440',
              }
          }
        default:
          return {
            sprited: 0,
            uri: '/assets/fb/gif/mAeZkO4yhqj.gif',
            width: 48,
            height: 48,
            loggingID: '1876440',
          }
      }
    case '60':
      switch (theme) {
        case 'dark':
          switch (color) {
            case 'blue':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/ycQ2OPoZwUA.gif',
                width: 64,
                height: 64,
                loggingID: '1940508',
              }
            case 'disabled':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/JYwEre3ewp7.gif',
                width: 64,
                height: 64,
                loggingID: '1940512',
              }
            case 'dark':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/8gPN8wBD9yB.gif',
                width: 64,
                height: 64,
                loggingID: '1940510',
              }
            case 'light':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/8gPN8wBD9yB.gif',
                width: 64,
                height: 64,
                loggingID: '1940510',
              }
            default:
              return {
                sprited: 0,
                uri: '/assets/fb/gif/8gPN8wBD9yB.gif',
                width: 64,
                height: 64,
                loggingID: '1940510',
              }
          }
        case 'light':
          switch (color) {
            case 'blue':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/8kyIVWHZW-b.gif',
                width: 64,
                height: 64,
                loggingID: '1940509',
              }
            case 'disabled':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/M2HDLLPAUWl.gif',
                width: 64,
                height: 64,
                loggingID: '1940513',
              }
            case 'dark':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/WtK_u51t3nM.gif',
                width: 64,
                height: 64,
                loggingID: '1940511',
              }
            case 'light':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/8gPN8wBD9yB.gif',
                width: 64,
                height: 64,
                loggingID: '1940510',
              }
            default:
              return {
                sprited: 0,
                uri: '/assets/fb/gif/WtK_u51t3nM.gif',
                width: 64,
                height: 64,
                loggingID: '1940511',
              }
          }
        default:
          return {
            sprited: 0,
            uri: '/assets/fb/gif/WtK_u51t3nM.gif',
            width: 64,
            height: 64,
            loggingID: '1940511',
          }
      }
    case '72':
      switch (theme) {
        case 'dark':
          switch (color) {
            case 'blue':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/96GJYGbUDCJ.gif',
                width: 72,
                height: 72,
                loggingID: '1876418',
              }
            case 'disabled':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/Tks_lRPtYc-.gif',
                width: 72,
                height: 72,
                loggingID: '1876450',
              }
            case 'dark':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/uzrQzxgD_Bg.gif',
                width: 72,
                height: 72,
                loggingID: '1876434',
              }
            case 'light':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/uzrQzxgD_Bg.gif',
                width: 72,
                height: 72,
                loggingID: '1876434',
              }
            default:
              return {
                sprited: 0,
                uri: '/assets/fb/gif/uzrQzxgD_Bg.gif',
                width: 72,
                height: 72,
                loggingID: '1876434',
              }
          }
        case 'light':
          switch (color) {
            case 'blue':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/9ISCYYcy94m.gif',
                width: 72,
                height: 72,
                loggingID: '1876426',
              }
            case 'disabled':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/ZH27Vvjc9-u.gif',
                width: 72,
                height: 72,
                loggingID: '1876458',
              }
            case 'dark':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/79uB7ciX8vY.gif',
                width: 72,
                height: 72,
                loggingID: '1876442',
              }
            case 'light':
              return {
                sprited: 0,
                uri: '/assets/fb/gif/uzrQzxgD_Bg.gif',
                width: 72,
                height: 72,
                loggingID: '1876434',
              }
            default:
              return {
                sprited: 0,
                uri: '/assets/fb/gif/79uB7ciX8vY.gif',
                width: 72,
                height: 72,
                loggingID: '1876442',
              }
          }
        default:
          return {
            sprited: 0,
            uri: '/assets/fb/gif/79uB7ciX8vY.gif',
            width: 72,
            height: 72,
            loggingID: '1876442',
          }
      }
    default:
      return {
        sprited: 0,
        uri: '/assets/fb/gif/WEhNL1y2zoZ.gif',
        width: 32,
        height: 32,
        loggingID: '1876439',
      }
  }
}

export function getRingColor(color: string) {
  switch (color) {
    case 'dark':
      return {
        backgroundColor: 'var(--progress-ring-neutral-background)',
        foregroundColor: 'var(--progress-ring-neutral-foreground)',
      }
    case 'light':
      return {
        backgroundColor: 'var(--progress-ring-on-media-background)',
        foregroundColor: 'var(--progress-ring-on-media-foreground)',
      }
    case 'blue':
      return {
        backgroundColor: 'var(--progress-ring-blue-background)',
        foregroundColor: 'var(--progress-ring-blue-foreground)',
      }
    case 'disabled':
      return {
        backgroundColor: 'var(--progress-ring-disabled-background)',
        foregroundColor: 'var(--progress-ring-disabled-foreground)',
      }
    default:
      return {
        backgroundColor: 'var(--progress-ring-neutral-background)',
        foregroundColor: 'var(--progress-ring-neutral-foreground)',
      }
  }
}
