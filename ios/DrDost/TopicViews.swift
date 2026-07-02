import SwiftUI
import DrDostKit

struct TopicListView: View {
    let title: String
    let topics: [Topic]

    var body: some View {
        NavigationStack {
            List(topics) { topic in
                NavigationLink(value: topic) {
                    VStack(alignment: .leading, spacing: 4) {
                        Text(topic.title).font(.headline)
                        Text(topic.excerpt)
                            .font(.subheadline)
                            .foregroundStyle(.secondary)
                            .lineLimit(3)
                    }
                    .padding(.vertical, 4)
                }
            }
            .navigationTitle(title)
            .navigationDestination(for: Topic.self) { topic in
                TopicDetailView(topic: topic)
            }
        }
    }
}

struct TopicDetailView: View {
    let topic: Topic

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 16) {
                SharedImage(path: topic.image)
                    .frame(maxWidth: .infinity)
                    .frame(height: 220)
                    .clipShape(RoundedRectangle(cornerRadius: 16))
                    .accessibilityLabel(topic.imageAlt ?? topic.title)

                Text(topic.title)
                    .font(.title.weight(.semibold))
                    .fontDesign(.serif)

                ForEach(topic.body, id: \.self) { paragraph in
                    Text(paragraph)
                }
            }
            .padding()
        }
        .navigationTitle(topic.title)
        .navigationBarTitleDisplayMode(.inline)
    }
}
