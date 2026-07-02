import SwiftUI

/// Renders an image bundled under shared/assets/<path>.
/// Falls back to a warm gradient, matching the website's imageless topics.
struct SharedImage: View {
    let path: String?
    var contentMode: ContentMode = .fill

    var body: some View {
        if let uiImage {
            Image(uiImage: uiImage)
                .resizable()
                .aspectRatio(contentMode: contentMode)
        } else {
            LinearGradient(
                colors: [
                    Color(red: 0.93, green: 0.89, blue: 0.83),
                    Color(red: 0.82, green: 0.74, blue: 0.64),
                ],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )
        }
    }

    private var uiImage: UIImage? {
        guard let path, let base = Bundle.main.resourceURL else { return nil }
        return UIImage(contentsOfFile: base.appendingPathComponent("shared/assets/\(path)").path)
    }
}
