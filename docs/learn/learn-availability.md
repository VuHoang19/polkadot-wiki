---
id: learn-availability
title: Availability and Validity
sidebar_label: Availability and Validity
description: Learn about Polkadot's approach to sharding.
slug: ../learn-availability
---

Giao thức Tính khả dụng và Tính hợp lệ (AnV) của Polkadot là thứ cho phép mạng
được phân chia hiệu quả giữa các parachains trong khi vẫn duy trì các đảm bảo an ninh mạnh mẽ.

## Các giai đoạn của giao thức AnV

Có năm giai đoạn của giao thức Tính khả dụng và Tính hợp lệ.

1. Parachain phase.
2. Relay chain submission phase.
3. Các giao thức con khả dụng và không khả dụng.
4. Kiểm tra tính hợp lệ phê duyệt GRANDPA thứ cấp.
5. Việc sử dụng thiết bị đo độ bền cuối cùng có khả năng chịu lỗi Byzantine để củng cố chuỗi.

### Parachain phase

Giai đoạn parachain của AnV là khi trình đối chiếu của parachain đề xuất một khối ứng cử viên cho các trình xác thực hiện được gán cho parachain.

> Khối ứng cử viên là một khối mới từ trình đối chiếu parachain có thể hợp lệ hoặc không hợp lệ và phải qua kiểm tra tính hợp lệ trước khi được đưa vào Relay chain.

### Relay chain submission phase

Sau đó, những người xác thực sẽ kiểm tra khối ứng cử viên với chức năng xác minh được hiển thị bởi mã đã đăng ký của parachain đó. Nếu việc xác minh thành công, thì những người xác nhận sẽ chuyển khối ứng cử viên cho những người xác nhận khác trong mạng tin đồn. Tuy nhiên, nếu việc xác minh không thành công, người xác nhận sẽ ngay lập tức từ chối khối ứng cử viên là không hợp lệ.

Khi hơn một nửa số người xác thực parachain đồng ý rằng một ứng cử viên khối parachain cụ thể là một chuyển đổi trạng thái hợp lệ, họ chuẩn bị biên nhận ứng viên. Biên nhận ứng cử viên cuối cùng sẽ được đưa vào trạng thái Chuỗi chuyển tiếp. Nó bao gồm:

* parachain ID.
* ID và chữ ký của người đối chiếu.
* Một băm của biên nhận ứng viên của khối mẹ.
* Gốc Merkle của các mẩu mã có tính tẩy xóa của khối.
* Gốc Merkle của bất kỳ thư gửi đi nào.
* Một hàm băm của khối.
* Gốc trạng thái của parachain trước khi thực thi khối.
* Gốc trạng thái của parachain sau khi thực thi khối.

Thông tin này có kích thước không đổi trong khi khối PoV thực tế của parachain có thể có độ dài thay đổi. Đó là đủ thông tin cho bất kỳ ai có được khối PoV đầy đủ để xác minh sự chuyển đổi trạng thái chứa bên trong nó.

### Các giao thức con khả dụng và không khả dụng.

Trong các giai đoạn khả dụng và không khả dụng, người xác nhận tin đồn về các đoạn mã có tính tẩy xóa trong mạng ([erasure coded](#erasure-codes)). Ít nhất 1/3 + 1 trình xác thực phải báo cáo rằng họ sở hữu đoạn mã của họ. Khi đã đạt đến ngưỡng trình xác thực này, mạng có thể xem xét khối PoV của parachain có sẵn.

## Erasure Codes

Mã hóa xóa biến đổi một thông báo thành một mã dài hơn cho phép khôi phục thông điệp gốc từ một tập hợp con của mã và không có một số phần của mã. Mã là thông điệp gốc được đệm thêm một số dữ liệu cho phép tạo lại mã trong trường hợp bị tẩy xóa.

Loại mã xóa được sử dụng bởi sơ đồ tính khả dụng của Polkadot là mã [Reed-Solomon][reed solomon]
, đã được ứng dụng thử nghiệm trong công nghệ bên ngoài ngành công nghiệp blockchain. Một ví dụ được tìm thấy trong ngành công nghiệp đĩa compact. Đĩa CD sử dụng mã Reed-Solomon để sửa mọi dữ liệu bị thiếu do sự không nhất quán trên mặt đĩa như các hạt bụi hoặc vết xước.

Trong Polkadot, mã xóa được sử dụng để giữ trạng thái parachain có sẵn cho hệ thống mà không yêu cầu tất cả trình xác thực phải giữ các tab trên tất cả parachains. Thay vào đó, trình xác thực chia sẻ các phần dữ liệu nhỏ hơn và sau đó có thể xây dựng lại toàn bộ dữ liệu theo giả định rằng 1/3 + 1 trong số các trình xác thực có thể cung cấp các phần dữ liệu của họ.

**Lưu ý:** Ngưỡng 1/3 + 1 của trình xác thực phải đáp ứng để tạo dữ liệu trạng thái parachain đầy đủ tương ứng với giả định bảo mật của Polkadot liên quan đến các nút Byzantine.

## Fishermen: Deprecated

Ý tưởng của Fishermen là chúng là các nút đầy đủ của các parachains, giống như các máy đối chiếu, nhưng thực hiện một vai trò khác trong mối quan hệ với mạng Polkadot. Thay vì đóng gói quá trình chuyển đổi trạng thái và tạo ra các khối parachain tiếp theo như các máy đối chiếu làm, Fishermen sẽ theo dõi quá trình này và đảm bảo không có quá trình chuyển đổi trạng thái không hợp lệ nào được đưa vào.

**Fishermen không có sẵn trên Kusama hoặc Polkadot và không được lên kế hoạch để thực hiện chính thức, mặc dù các đề xuất trước đó trong [AnV protocol](https://w3f-research.readthedocs.io/en/latest/polkadot/Availability_and_Validity.html).**

Để giải quyết động lực đằng sau việc xem xét thiết kế Fishermen, các bộ kiểm tra hỗ trợ thứ cấp hiện tại thực hiện một vai trò tương tự trong mối quan hệ với mạng Polkadot. Từ quan điểm bảo mật, bảo mật dựa trên việc có ít nhất một trình xác thực trung thực trong số các trình xác thực parachain hoặc trình kiểm tra phụ.

## Tài liệu khác

* [Path of a Parachain Block][life of] - Bài viết của nhà phân tích Joe Petrowski của Parity giải thích về các kiểm tra tính hợp lệ mà một khối parachain phải vượt qua để phát triển parachain.
* [Availability and Validity][anv paper] - Bài báo của Nhóm nghiên cứu W3F chỉ rõ tính khả dụng và giao thức hợp lệ một cách chi tiết.
[reed solomon]: https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction
[pruning]: https://example.org
[life of]: https://polkadot.network/the-path-of-a-parachain-block/
[anv paper]: https://github.com/w3f/research/tree/85cd4adfccb7d435f21cd9fd249cd1b7f5167537/docs/papers/AnV
