---
id: learn-governance
title: Governance
sidebar_label: Governance
description: Learn about Polkadot's thought-through governance model.
slug: ../learn-governance
---

Polkadot sử dụng một cơ chế quản trị tinh vi cho phép Polkadot phát triển ngoài giờ một cách linh
hoạt theo yêu cầu cuối cùng của các bên liên quan đã tập hợp. Mục tiêu đã nêu là đảm bảo rằng phần
lớn cổ phần luôn có thể chỉ huy mạng.

Để làm được điều này, chúng tôi tập hợp nhiều cơ chế mới lạ khác nhau, bao gồm chức năng chuyển đổi
trạng thái vô định hình được lưu trữ trên chuỗi và được xác định bằng ngôn ngữ trung gian trung lập
nền tảng (i.e. [WebAssembly](learn-wasm.md)) và một số cơ chế bỏ phiếu trên chuỗi, chẳng hạn như
tham khảo ý kiến với siêu đa số thích ứng ngưỡng và bỏ phiếu phê duyệt hàng loạt. Tất cả các thay
đổi đối với giao thức phải được sự đồng ý của cuộc trưng cầu dân ý có tỷ trọng.

## Cơ chế

Để thực hiện bất kỳ thay đổi nào đối với mạng, ý tưởng là tập hợp các chủ sở hữu mã thông báo đang
hoạt động và hội đồng cùng quản lý quyết định nâng cấp mạng. Bất kể đề xuất được đề xuất bởi công
chúng (chủ sở hữu mã thông báo) hay hội đồng, cuối cùng nó sẽ phải trải qua một cuộc trưng cầu dân ý
để cho phép tất cả những người nắm giữ, tính theo tỷ trọng, đưa ra quyết định.

Để hiểu rõ hơn về cách thức thành lập hội đồng, vui lòng đọc [phần này](#council).

## Trọng tài

Trọng tài là các chương trình bỏ phiếu đơn giản, toàn diện, dựa trên cổ phần. Mỗi cuộc trưng cầu có
một đề xuất cụ thể được liên kết với nó có dạng một lệnh gọi hàm đặc quyền trong thời gian chạy (bao
gồm lệnh gọi mạnh mẽ nhất: `set_code`, có thể chuyển ra toàn bộ mã của thời gian chạy, đạt được điều
mà nếu không sẽ yêu cầu "hard fork").

Trọng tài là các sự kiện rời rạc, có một khoảng thời gian cố định nơi biểu quyết xảy ra, sau đó được
đánh dấu và lệnh gọi hàm được thực hiện nếu biểu quyết được chấp thuận. Trọng tài luôn luôn là nhị
phân; lựa chọn duy nhất của bạn trong việc bỏ phiếu là "aye", "nay" hoặc bỏ phiếu trắng hoàn toàn.

Có thể bắt đầu cuộc trưng cầu bằng một trong những cách sau:

- Các đề xuất được đệ trình công khai;
- Các đề xuất do hội đồng đệ trình, thông qua đa số hoặc nhất trí;
- Các đề xuất được đệ trình như một phần của việc ban hành một cuộc trưng cầu dân ý trước đó;
- Đề xuất khẩn cấp do Ủy ban kỹ thuật đệ trình và được Hội đồng chấp thuận.

Đề xuất khẩn cấp do Ủy ban kỹ thuật đệ trình và được Hội đồng chấp thuận. Tất cả các cuộc trưng cầu
đều có độ trễ ban hành liên quan đến chúng. Đây là khoảng thời gian giữa cuộc trưng cầu dân ý kết
thúc và, giả sử đề xuất đã được thông qua, các thay đổi sẽ được ban hành. Đối với hai cách đầu tiên
mà một cuộc trưng cầu dân ý được đưa ra, đây là thời gian cố định. Đối với Kusama, đó là 8 ngày; ở
Polkadot, đó là 28 ngày. Đối với loại thứ ba, nó có thể được thiết lập như mong muốn.

Các đề xuất khẩn cấp giải quyết các vấn đề lớn với mạng cần được "theo dõi nhanh". Những điều này sẽ
có thời gian ban hành ngắn hơn.

### Đề xuất Trưng cầu dân ý

#### Chương trình trưng cầu công khai

Bất kỳ ai cũng có thể đề xuất một cuộc trưng cầu dân ý bằng cách gửi số lượng mã thông báo tối thiểu
trong một khoảng thời gian nhất định (số khối). Nếu ai đó đồng ý với đề xuất, họ có thể gửi cùng một
lượng mã thông báo để hỗ trợ nó - hành động này được gọi là biệt phái. Đề xuất có mức hỗ trợ ngoại
quan cao nhất sẽ được lựa chọn để đưa ra trưng cầu dân ý trong chu kỳ bỏ phiếu tiếp theo.

Lưu ý rằng điều này có thể khác với số giây tuyệt đối; ví dụ: ba tài khoản liên kết 20 DOT, mỗi tài
khoản sẽ "lớn hơn" mười tài khoản liên kết một DOT mỗi tài khoản. Các mã thông báo ngoại quan sẽ
được phát hành sau khi đề xuất được lập bảng (nghĩa là được đưa ra biểu quyết).

Có thể có tối đa 100 đề xuất công khai trong hàng đợi đề xuất.

#### Hội đồng Trọng tài

Hội đồng nhất trí - Khi tất cả các thành viên của hội đồng đồng ý về một đề xuất, nó có thể được
chuyển sang một cuộc trưng cầu dân ý. Cuộc trưng cầu dân ý này sẽ có thành kiến ​​tiêu cực về số cử
tri đi bỏ phiếu (nghĩa là số lượng cổ phần biểu quyết càng nhỏ thì số tiền cần thiết để nó được
thông qua càng nhỏ - xem "Xu hướng số lượng thích ứng", bên dưới).

Hội đồng đa số - Khi chỉ có đa số thành viên hội đồng đồng ý, cuộc trưng cầu dân ý cũng có thể được
biểu quyết, nhưng nó sẽ mang tính đa số (51% thắng).

Chỉ có thể có một cuộc trưng cầu dân ý đang hoạt động tại bất kỳ thời điểm nào, ngoại trừ trường hợp
cũng có một cuộc trưng cầu khẩn cấp đang diễn ra.

#### Thời khóa biểu biểu quyết

Cứ sau 28 ngày ở Polkadot hoặc 7 ngày ở Kusama, một cuộc trưng cầu dân ý mới sẽ được đưa ra để bỏ
phiếu, giả sử có ít nhất một đề xuất trong một trong các hàng đợi. Có một hàng đợi cho các đề xuất
được Hội đồng phê duyệt và một hàng đợi cho các đề xuất được gửi công khai. Cuộc trưng cầu dân ý sẽ
được biểu quyết thay thế giữa đề xuất hàng đầu trong hai hàng đợi.

Đề xuất "hàng đầu" được xác định bởi số lượng cổ phần liên quan đằng sau nó. Nếu hàng đợi đã cho mà
đến lượt nó tạo ra một cuộc trưng cầu dân ý không có đề xuất nào (trống) và các đề xuất đang chờ
trong hàng đợi khác, thì đề xuất hàng đầu trong hàng kia sẽ trở thành một cuộc trưng cầu dân ý.

Nhiều cuộc trưng cầu không thể được biểu quyết trong cùng một khoảng thời gian, ngoại trừ cuộc trưng
cầu khẩn cấp. Một cuộc trưng cầu khẩn cấp xảy ra cùng lúc với một cuộc trưng cầu thông thường (công
khai hoặc do hội đồng đề xuất) là lần duy nhất mà nhiều cuộc trưng cầu dân ý có thể được biểu quyết
cùng một lúc.

#### Bỏ phiếu trong cuộc trưng cầu dân ý

Để bỏ phiếu, người bỏ phiếu thường phải khóa mã thông báo của họ trong ít nhất khoảng thời gian trì
hoãn ban hành sau khi kết thúc cuộc trưng cầu dân ý. Điều này là để đảm bảo rằng cần phải có một số
lợi nhuận kinh tế tối thiểu để đạt được kết quả và ngăn cản việc bán phiếu bầu.

Bạn hoàn toàn có thể bỏ phiếu mà không bị khóa, nhưng phiếu bầu của bạn chỉ có giá trị bằng một phần
nhỏ của phiếu bầu thông thường, với số tiền đặt cọc của bạn. Đồng thời, chỉ nắm giữ một lượng nhỏ mã
thông báo không có nghĩa là người nắm giữ không thể ảnh hưởng đến kết quả trưng cầu dân ý, nhờ vào
khóa thời gian. Bạn có thể đọc thêm về điều này tại [Voluntary Locking](#voluntary-locking).

> Để tìm hiểu thêm về bỏ phiếu trong cuộc trưng cầu, vui lòng xem
> [video giải thích kỹ thuật của chúng tôi](https://www.youtube.com/watch?v=BkbhhlsezGA&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=31&ab_channel=Polkadot).

```
Thí dụ:

Peter: Bỏ phiếu `Không` với 10 DOT trong khoảng thời gian khóa 128 tuần => 10 * 6 = 60 Phiếu bầu

Logan: Phiếu bầu `Có` với 20 DOT trong thời gian khóa 4 tuần => 20 * 1 = 20 Phiếu bầu

Kevin: Bỏ phiếu `Có` với 15 DOT trong thời gian khóa 8 tuần => 15 * 2 = 30 Phiếu bầu
```

Mặc dù kết hợp cả Logan và Kevin bỏ phiếu với nhiều DOT hơn Peter, thời gian khóa cho cả hai người
ít hơn Peter, dẫn đến việc kiểm phiếu của họ ít hơn.

#### Tallying

Tùy thuộc vào thực thể nào đưa ra đề xuất và liệu tất cả các thành viên hội đồng có bỏ phiếu đồng ý
hay không, có ba kịch bản khác nhau. Chúng ta có thể sử dụng bảng sau để tham khảo.

|            **Entity**            |                                  **Metric**                                   |
| :------------------------------: | :---------------------------------------------------------------------------: |
|            Công khai             |   Xu hướng cử tri tích cực (Phê duyệt siêu đa số) (Positive Turnout Bias )    |
| Hội đồng (Hoàn thành đồng thuận) | Xu hướng tỷ lệ cử tri tiêu cực (Siêu đa số chống lại) (Negative Turnout Bias) |
|   Hội đồng (Thỏa thuận đa số)    |                       Đa số đơn giản (Simple Majority)                        |

Ngoài ra, chúng tôi cần thông tin sau và áp dụng một trong các công thức được liệt kê bên dưới để
tính toán kết quả bỏ phiếu. Ví dụ: hãy sử dụng đề xuất công khai làm ví dụ, vì vậy công thức Phê
duyệt Siêu đa số sẽ được áp dụng. Không có số đại biểu nghiêm ngặt, nhưng yêu cầu siêu đa số sẽ tăng
lên khi số cử tri đi bỏ phiếu thấp hơn.

```
chấp thuận - số phiếu thuận

chống lại - số phiếu này

cử tri đi bỏ phiếu - tổng số mã thông báo biểu quyết (không bao gồm xác tín)

bầu cử - tổng số mã thông báo DOT được phát hành trong mạng
```

##### Phê duyệt Siêu đa số

Một khuynh hướng cử tri đi bỏ phiếu tích cực, theo đó, một siêu đa số phiếu ủng hộ lớn được yêu cầu
thực hiện ở tỷ lệ cử tri đi bỏ phiếu thấp, nhưng khi tỷ lệ cử tri đi bầu tăng lên 100%, nó trở thành
một đa số phiếu đơn giản như dưới đây.

![](https://latex.codecogs.com/svg.latex?\large&space;{against&space;\over&space;\sqrt{turnout}}&space;<&space;{approve&space;\over&space;\sqrt{electorate}})

##### Siêu đa số chống lại

Một khuynh hướng tiêu cực về số cử tri đi bỏ phiếu, theo đó, phải có siêu đa số phiếu ủng hộ từ chối
ở tỷ lệ cử tri đi bỏ phiếu thấp, nhưng khi tỷ lệ cử tri đi bầu tăng lên 100%, nó trở thành đa số
phiếu đơn giản như dưới đây.

![](https://latex.codecogs.com/svg.latex?\large&space;{against&space;\over&space;\sqrt{electorate}}&space;<&space;{approve&space;\over&space;\sqrt{turnout}})

##### Đa số đơn giản

Đa số mang, một so sánh đơn giản của các phiếu bầu; nếu có nhiều phiếu ủng hộ hơn nay, thì đề xuất
được thực hiện, bất kể số phiếu cổ phần đối với đề xuất là bao nhiêu.

![](https://latex.codecogs.com/svg.latex?\large&space;{approve}&space;>&space;{against})

_Để biết thêm về nguồn gốc của các công thức trên, vui lòng đọc
[democracy pallet](https://github.com/paritytech/substrate/blob/master/frame/democracy/src/vote_threshold.rs)_.

```
Thí dụ:

Cho rằng:
- Tổng cộng chúng tôi chỉ có 1_500 mã thông báo DOT.
- Đề xuất công khai

John - 500 DOT
Peter - 100 DOT
Lilly - 150 DOT
JJ - 150 ĐIỂM
Ken - 600 DOT

John: Số phiếu bầu `Có` trong thời gian khóa 4 tuần => 500 * 1 = 500 Phiếu bầu

Peter: Số phiếu bầu `Có` trong thời gian khóa 4 tuần => 100 * 1 = 100 Phiếu bầu

JJ: Bỏ phiếu `Không` cho thời gian khóa 16 tuần => 150 * 3 = 450 phiếu bầu

approve = 600
against = 450
turnout = 750
electorate = 1500
```

![\Large \frac{450}{\sqrt{750}}&space;<&space;\frac{600}{\sqrt{1500}}](https://latex.codecogs.com/svg.latex?\large&space;\frac{450}{\sqrt{750}}&space;<&space;\frac{600}{\sqrt{1500}})

![\Large {16.432}&space;<&space;{15.492}](https://latex.codecogs.com/svg.latex?\large&space;{16.432}&space;<&space;{15.492})

Vì ví dụ trên là một cuộc trưng cầu dân ý công khai, Phê duyệt Siêu đa số sẽ được sử dụng để tính
toán kết quả. Phê duyệt Siêu đa số yêu cầu nhiều phiếu ủng hộ hơn để thông qua cuộc trưng cầu dân ý
khi tỷ lệ cử tri đi bầu thấp, do đó, dựa trên kết quả trên, cuộc trưng cầu dân ý sẽ bị từ chối.
Ngoài ra, chỉ có mã thông báo của người bỏ phiếu chiến thắng mới bị khóa. Nếu các cử tri ở bên thua
cuộc trong cuộc trưng cầu dân ý tin rằng kết quả sẽ có tác động tiêu cực, thì mã thông báo của họ có
thể chuyển nhượng được vì vậy họ sẽ không bị khóa vào quyết định. Hơn nữa, các đề xuất đoạt giải chỉ
được ban hành một cách tự chủ sau một số thời gian ban hành.

#### Khóa tự nguyện

Polkadot sử dụng một ý tưởng có tên là Khóa tự nguyện cho phép chủ sở hữu mã thông báo tăng quyền
biểu quyết của họ bằng cách tuyên bố thời gian họ sẵn sàng khóa mã thông báo của mình, do đó, số
phiếu bầu cho mỗi chủ sở hữu mã thông báo sẽ được tính theo công thức sau:

```
votes = tokens * conviction_multiplier
```

Hệ số xác tín tăng hệ số phiếu bầu lên một khi số thời gian khóa tăng gấp đôi.

| Lock Periods | Vote Multiplier |
| :----------: | :-------------: |
|      0       |       0.1       |
|      1       |        1        |
|      2       |        2        |
|      4       |        3        |
|      8       |        4        |
|      16      |        5        |
|      32      |        6        |

Số lần "nhân đôi" tối đa của khoảng thời gian khóa được đặt thành 6 (và do đó có tổng cộng 32 đợt
khóa) và một khoảng thời gian khóa tương đương với 28 ngày đối với Polkadot và 8 ngày đối với
Kusama. Chỉ nhân đôi được phép; chẳng hạn, bạn không thể khóa 24 kỳ và tăng số lần kết án của bạn
lên 5,5.

Trong khi mã thông báo bị khóa, bạn vẫn có thể sử dụng nó để bỏ phiếu và đặt cược; bạn chỉ bị cấm
chuyển các mã thông báo này sang tài khoản khác.

Các phiếu bầu vẫn được "tính" cùng một lúc (khi kết thúc thời gian biểu quyết), bất kể mã thông báo
bị khóa trong bao lâu.

#### Xu hướng số đại biểu thích ứng

Polkadot đưa ra một khái niệm, "Xu hướng số lượng thích ứng", có chức năng như một đòn bẩy mà hội
đồng có thể sử dụng để thay đổi siêu đa số hiệu quả cần thiết để làm cho đề xuất được thông qua dễ
dàng hơn hoặc khó khăn hơn trong trường hợp không có đa số rõ ràng. quyền biểu quyết ủng hộ nó hoặc
chống lại nó.

![](../assets/governance/adaptive-quorum-biasing.png)

Hãy sử dụng hình ảnh trên làm ví dụ.

Nếu một cuộc trưng cầu dân ý được đệ trình công khai chỉ có 25% cử tri đi bỏ phiếu, thì tổng số
phiếu "ủng hộ" phải đạt 66% mới được thông qua vì chúng tôi áp dụng Chế độ Xu hướng Cử tri Tích cực.

Ngược lại, khi nó có 75% cử tri đi bỏ phiếu, tổng số phiếu "aye" phải đạt 54%, có nghĩa là yêu cầu
siêu đa số giảm khi số cử tri đi bỏ phiếu tăng lên.

Khi hội đồng đưa ra một đề xuất mới thông qua sự đồng ý nhất trí, cuộc trưng cầu dân ý sẽ được đưa
ra biểu quyết bằng cách sử dụng "Xu hướng cử tri phủ định". Trong trường hợp này, việc thông qua đề
xuất này dễ dàng hơn với tỷ lệ cử tri đi bỏ phiếu thấp và yêu cầu siêu đa số từ chối. Khi nhiều
người nắm giữ mã thông báo tham gia bỏ phiếu hơn, xu hướng tiếp cận với đa số rõ ràng.

Liên quan đến hình ảnh trên, khi một cuộc trưng cầu dân ý chỉ có 25% cử tri đi bầu, việc kiểm phiếu
"aye" phải đạt 34% mới được thông qua.

Nói tóm lại, khi tỷ lệ cử tri đi bỏ phiếu thấp, một siêu đa số bắt buộc phải từ chối đề xuất, có
nghĩa là phải đạt đến ngưỡng thấp hơn về số phiếu "thuận lợi", nhưng khi tỷ lệ cử tri đi bầu tăng
lên 100%, nó sẽ trở thành đa số đơn giản.

Tất cả ba cơ chế kiểm đếm - đa số thực hiện, siêu đa số tán thành và siêu đa số chống lại - tương
đương với một hệ thống kiểm đếm đơn giản với tỷ lệ cử tri đi bỏ phiếu là 100%.

## Hội đồng

> [Video giải thích Hội đồng](https://www.youtube.com/watch?v=837Vv3gdRzI)

Để đại diện cho các bên liên quan thụ động, Polkadot giới thiệu ý tưởng về một "hội đồng". Hội đồng
là một thực thể trên chuỗi bao gồm một số tác nhân, mỗi thành viên được đại diện như một tài khoản
trên chuỗi. Trên Polkadot, hội đồng hiện bao gồm 13 thành viên. Con số này dự kiến ​​sẽ tăng lên 24
chỗ trong vài tháng tới. Nói chung, hội đồng sẽ có một số ghế cố định. Trên Polkadot, đây sẽ là 24
chỗ trong khi trên Kusama là 19 chỗ.

Cùng với [kiểm soát kho bạc](learn-treasury.md), hội đồng được kêu gọi chủ yếu cho ba nhiệm vụ quản
trị: đề xuất các cuộc trưng cầu hợp lý, hủy bỏ cuộc trưng cầu nguy hiểm hoặc độc hại không kiểm soát
được và bầu ra ủy ban kỹ thuật.

Để một cuộc trưng cầu dân ý được đề xuất bởi hội đồng, phải có đa số thành viên ủng hộ, không có
thành viên nào thực hiện quyền phủ quyết. Quyền phủ quyết chỉ có thể được thực hiện một lần bởi một
thành viên đối với bất kỳ đề xuất nào; nếu sau một thời gian hạ nhiệt, đề xuất được gửi lại, họ có
thể không phủ quyết lần thứ hai.

Các động thái của hội đồng được thông qua với tỷ lệ siêu đa số 3/5 (60%) - nhưng không đạt được sự
ủng hộ nhất trí - sẽ chuyển sang một cuộc trưng cầu dân ý công khai theo một sơ đồ bỏ phiếu trung
lập, mang đa số. Trong trường hợp tất cả các thành viên của hội đồng bỏ phiếu ủng hộ một đề nghị,
biểu quyết được coi là nhất trí và trở thành một cuộc trưng cầu dân ý với xu hướng số đại biểu thích
ứng tiêu cực.

### Đang hủy

Một đề xuất có thể bị hủy nếu [ủy ban kỹ thuật](#technical-committee) hất trí làm như vậy hoặc nếu
Root (ví dụ: sudo) kích hoạt chức năng này. Khoản đặt cọc của đề xuất bị hủy bỏ sẽ bị đốt cháy.

Ngoài ra, đa số hai phần ba của hội đồng có thể hủy bỏ một cuộc trưng cầu dân ý. Điều này có thể
hoạt động như một phương sách cuối cùng nếu có một vấn đề được phát hiện muộn trong đề xuất của cuộc
trưng cầu dân ý, chẳng hạn như một lỗi trong mã thời gian chạy mà đề xuất sẽ đưa ra.

Nếu việc hủy bỏ gây tranh cãi đến mức hội đồng không thể có được đa số hai phần ba, thì các bên liên
quan sẽ toàn quyền quyết định số phận của đề xuất.

### Danh sách đen

Một đề xuất có thể được đưa vào danh sách đen bởi Root (ví dụ: sudo). Một đề xuất được đưa vào danh
sách đen và cuộc trưng cầu dân ý liên quan (nếu có) sẽ bị [hủy bỏ](#canceling) ngay lập tức. Ngoài
ra, hàm băm của đề xuất nằm trong danh sách cấm không thể xuất hiện lại trong hàng đợi đề xuất. Danh
sách đen rất hữu ích khi loại bỏ các đề xuất sai có thể được gửi với cùng một hàm băm, tức
[đề xuất số 2](https://polkascan.io/polkadot/democracy/proposal/2) trong đó người gửi đã sử dụng văn
bản thuần túy để đưa ra đề xuất.

Khi thấy đề xuất của họ bị xóa, một người gửi không được giới thiệu đúng cách với hệ thống dân chủ
của Polkadot có thể bị cám dỗ để gửi lại đề xuất tương tự. Điều đó nói rằng, đây không phải là một
phương pháp chống đánh lừa để ngăn chặn các đề xuất không hợp lệ được gửi - một ký tự được thay đổi
duy nhất trong văn bản của đề xuất cũng sẽ thay đổi hàm băm của đề xuất, khiến danh sách đen của mỗi
hàm băm không hợp lệ.

### Làm thế nào để trở thành một thành viên hội đồng?

![](../assets/governance/approval-vote.png)

Tất cả các bên liên quan có thể tự do báo hiệu sự chấp thuận của họ đối với bất kỳ ứng viên nào đã
đăng ký.

Các cuộc bầu cử hội đồng được xử lý bằng cùng một quy trình bầu cử
[Phragmén election](learn-phragmen.md) chọn những người xác thực từ nhóm có sẵn dựa trên các đề cử.
Tuy nhiên, phiếu bầu của chủ sở hữu token cho các ủy viên hội đồng được tách biệt khỏi bất kỳ đề cử
nào mà họ có thể có đối với người xác thực. Các nhiệm kỳ của hội đồng kéo dài trong một ngày trên
Kusama và một tuần trên Polkadot..

Vào cuối mỗi nhiệm kỳ, [Phragmén election algorithm](learn-phragmen.md) sẽ chạy và kết quả sẽ chọn
các ủy viên hội đồng mới dựa trên cấu hình phiếu bầu của tất cả các cử tri. Cuộc bầu cử cũng chọn
một số ứng cử viên nhất định (hiện tại là 19 người ở Kusama và 20 người ở Polkadot) sẽ vẫn còn trong
hàng đợi với phiếu bầu của họ còn nguyên vẹn.

Trái ngược với hệ thống bầu cử "trước sau như một", nơi cử tri chỉ có thể bỏ phiếu cho một ứng cử
viên duy nhất từ ​​danh sách, cuộc bầu cử Phragmén là một cách biểu đạt hơn để bao gồm quan điểm của
từng cử tri. Người nắm giữ mã thông báo có thể coi đó là một cách để hỗ trợ bao nhiêu ứng cử viên
tùy thích. Thuật toán bầu cử sẽ tìm ra một tập hợp con hợp lý của các ứng cử viên phù hợp nhất với
các dấu hiệu được thể hiện của toàn bộ cử tri nói chung.

Hãy xem ví dụ dưới đây.

|      Round 1      |     |                |     |     |     |
| :---------------: | :-: | :------------: | :-: | :-: | :-: |
| **Token Holders** |     | **Candidates** |     |     |     |
|                   |  A  |       B        |  C  |  D  |  E  |
|       Peter       |  X  |                |  X  |  X  |  X  |
|       Alice       |     |       X        |     |     |     |
|        Bob        |     |                |  X  |  X  |  X  |
|      Kelvin       |  X  |                |  X  |     |     |
|     **Total**     |  2  |       1        |  3  |  2  |  2  |

Ví dụ trên cho thấy ứng cử viên C thắng cử ở vòng 1, trong khi ứng viên A, B, D & E tiếp tục ở lại
trong danh sách ứng cử viên cho vòng tiếp theo.

|      Round 2      |     |                |     |     |
| :---------------: | :-: | :------------: | :-: | :-: |
| **Token Holders** |     | **Candidates** |     |     |
|                   |  A  |       B        |  D  |  E  |
|       Peter       |  X  |       X        |     |     |
|       Alice       |  X  |       X        |     |     |
|        Bob        |  X  |       X        |  X  |  X  |
|      Kelvin       |  X  |       X        |     |     |
|     **Total**     |  4  |       4        |  1  |  1  |

Đối với người đứng đầu N (ví dụ như 4 trong ví dụ này), họ có thể ở lại và số phiếu của họ vẫn tồn
tại cho đến cuộc bầu cử tiếp theo. Sau vòng 2, mặc dù các ứng cử viên A & B nhận được cùng số phiếu
trong vòng này, ứng viên A được bầu vì sau khi thêm các phê duyệt cũ hơn chưa được sử dụng, nó cao
hơn B.

### Thành viên chính

Hội đồng, là một mô tả của
[Substrate's Collective pallet](https://github.com/paritytech/substrate/tree/master/frame/collective),
thực hiện cái được gọi là thành viên chính mà phiếu bầu đóng vai trò là mặc định cho các thành viên
khác không bỏ phiếu trước thời gian chờ.

Thành viên chính được chọn dựa trên [Borda count](https://en.wikipedia.org/wiki/Borda_count).

Mục đích của việc có một thành viên chính của hội đồng là để đảm bảo có đủ túc số, ngay cả khi một
số thành viên bỏ phiếu trắng. bỏ phiếu. Với sự tồn tại của một thành viên chính, nó buộc các ủy viên
hội đồng phải rõ ràng trong các phiếu bầu của họ hoặc phải kiểm phiếu của họ cho bất cứ điều gì được
bỏ phiếu bởi nguyên thủ.

## Hội đồng kỹ thuật

Ủy ban kỹ thuật được giới thiệu trong
[Kusama rollout and governance post](https://polkadot.network/kusama-rollout-and-governance/) với tư
cách là một trong ba phòng quản trị Kusama (cùng với Hội đồng và phòng trưng cầu dân ý). Ủy ban kỹ
thuật bao gồm các nhóm đã triển khai thành công hoặc chỉ định Polkadot / Thời gian chạy Kusama hoặc
Máy chủ Polkadot. Các đội được thêm hoặc xóa khỏi Ủy ban kỹ thuật thông qua đa số phiếu đơn giản của
[Hội đồng](#council).

Ủy ban kỹ thuật có thể cùng với Hội đồng đưa ra chương trình trưng cầu khẩn cấp, được theo dõi nhanh
để bỏ phiếu và triển khai. Các chương trình này được sử dụng để sửa lỗi khẩn cấp hoặc triển khai
nhanh các tính năng mới nhưng đã được thử nghiệm trong thời gian chạy.

Cuộc trưng cầu được theo dõi nhanh là loại cuộc trưng cầu duy nhất có thể hoạt động cùng với cuộc
trưng cầu đang hoạt động khác. Do đó, với cuộc trưng cầu được theo dõi nhanh, có thể có hai cuộc
trưng cầu đang hoạt động cùng một lúc. Việc bỏ phiếu cho một cuộc không ngăn cản người dùng bỏ phiếu
ở bên khác.

## Các câu hỏi thường gặp

### Làm cách nào để tôi có thể khiếu nại với hội đồng để thay mặt tôi ban hành một thay đổi?

Trong một số trường hợp, bạn có thể muốn khiếu nại với hội đồng trực tuyến để thay mặt bạn thực hiện
thay đổi. Một ví dụ về trường hợp này là trường hợp tiền bị mất hoặc bị khóa khi tiền bị mất do lỗi
giao diện của con người (chẳng hạn như nhập địa chỉ cho một mạng khác). Một ví dụ khác là nếu bạn đã
tham gia vào ICO Polkadot 2017 với địa chỉ nhiều chữ ký hiện không cho phép bạn ký thư dễ dàng. Khi
những trường hợp này có thể được chứng minh là một lỗi hợp lý , hội đồng có thể xem xét một đề nghị
quản trị để điều chỉnh nó.

Bước đầu tiên để khiếu nại với hội đồng là liên hệ với các ủy viên hội đồng. Không có nơi nào hiếm
hoi mà bạn được đảm bảo sẽ thu hút mọi người theo dõi thông điệp của bạn. Tuy nhiên, có một số nơi
tốt để bạn có thể bắt đầu. sự chú ý của một số người trong số họ. Phòng ma trận [Polkadot
Direction][] là một trong những nơi như vậy. Sau khi tạo tài khoản và tham gia phòng này, bạn có thể
đăng một thông báo đã được cân nhắc kỹ lưỡng tại đây nêu rõ trường hợp của bạn và cung cấp lý do tại
sao bạn nghĩ hội đồng nên thay mặt bạn xem xét ban hành một thay đổi đối với giao thức.

Tại một số thời điểm, bạn có thể sẽ cần một nơi để thảo luận dài hơn. Đối với điều này, bạn nên đăng
một bài trên [Polkassembly][]. Khi bạn viết một bài trên Polkassembly, hãy đảm bảo rằng bạn trình
bày tất cả bằng chứng về hoàn cảnh của mình và nêu rõ loại thay đổi mà bạn sẽ đề xuất với các ủy
viên hội đồng để ban hành. Hãy nhớ rằng các ủy viên hội đồng không cần phải thực hiện thay đổi, bạn
có trách nhiệm đưa ra một trường hợp rõ ràng về lý do tại sao nên thực hiện thay đổi.

## Tài liệu

- [Initial Governance Description](https://github.com/paritytech/polkadot/wiki/Governance)
- [Democracy Pallet](https://github.com/paritytech/substrate/tree/master/frame/democracy/src)
- [Governance Demo](https://www.youtube.com/watch?v=VsZuDJMmVPY&feature=youtu.be&t=24734) - Tiến sĩ Gavin Wood trình bày cấu trúc quản trị ban đầu cho Polkadot. (Video)
- [Governance on Polkadot](https://www.crowdcast.io/e/governance-on-polkadot--) - Một hội thảo trên web giải thích cách thức hoạt động của quản trị ở Polkadot và Kusama.
[polkadot direction]: https://matrix.to/#/!OwgojQyBzTlUQGGLhq:matrix.parity.io
[polkassembly]: https://polkadot.polkassembly.io/
