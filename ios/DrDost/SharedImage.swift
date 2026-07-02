import SwiftUI

/// Renders an image bundled under shared/assets/<path>.
/// Falls back to a warm gradient, matching the website's imageless topics.
struct SharedImage: View {
    let path: String?
    var contentMode: ContentMode = .fill
    @State private var uiImage: UIImage?

    var body: some View {
        Group {
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
        .task(id: path) {
            uiImage = await Self.load(path)
        }
    }

    private static func load(_ path: String?) async -> UIImage? {
        guard let path, let base = Bundle.main.resourceURL else { return nil }
        let file = base.appendingPathComponent("shared/assets/\(path)").path
        return await Task.detached { UIImage(contentsOfFile: file) }.value
    }
}
